import React, { useState, useContext, useCallback } from 'react';

import { HomepageContext } from '../homepageContext';
import { Input } from '../elements/Input';
import { DropDown } from '../elements/DropDown';
import { Button } from '../elements/Button';
import { MultilineInput } from '../elements/MultilineInput';
import PersonalInfoProtection from '../component/PersonalInfoProtection';
import axios from '../../utils/axios';
import webviewToast from '../elements/webviewToast';

export default function ApplicationCustomer(props) {
  const { type } = props;
  const context = useContext(HomepageContext);
  const [agree, setAgree] = useState(false);

  const [customerData, setCustomerData] = useState({
    '문의 유형': type,
    회사명: '',
    이름: '',
    직책: '',
    연락처: '',
    소속: '',
    이메일: '',
    '기타 문의': '',
    '문의 내용': '',
  });
  const [errorMessage, setErrorMessage] = useState({
    '문의 유형': '',
    회사명: '',
    이름: '',
    직책: '',
    연락처: '',
    소속: '',
    이메일: '',
    '기타 문의': '',
    '문의 내용': '',
  });
  const [isNotifyAgree, setNotifyAgree] = useState(false);

  function isAgree(agree) {
    console.log('agreed', agree);
    setAgree(agree);
    setNotifyAgree(false);
  }

  function updateValue(title, value) {
    if (title === '문의 유형') {
      setCustomerData({
        '문의 유형': value,
        회사명: '',
        이름: '',
        직책: '',
        연락처: '',
        소속: '',
        이메일: '',
        '기타 문의': '',
        '문의 내용': '',
      });
      setErrorMessage({
        '문의 유형': '',
        회사명: '',
        이름: '',
        직책: '',
        연락처: '',
        소속: '',
        이메일: '',
        '기타 문의': '',
        '문의 내용': '',
      });
      setNotifyAgree(false);
    }
    // console.log(title, value, customerData);
    setCustomerData((prevState) => ({
      ...prevState,
      [title]: value,
    }));
  }

  function updateErrorMessage(title, value) {
    setErrorMessage((prevState) => ({
      ...prevState,
      [title]: value,
    }));
  }

  const realSubmit = useCallback(async () => {
    try {
      console.log('REAL SUBMIT------------------------------------');
      const jsonData = JSON.stringify({
        company:
          customerData['문의 유형'] === '전문가 등록 문의'
            ? customerData['소속']
            : customerData['회사명'],
        contactNumber: customerData['연락처'],
        email: customerData['이메일'],
        name: customerData['이름'],
        position: customerData['직책'],
        question:
          customerData['문의 유형'] === '서비스 관련 문의'
            ? customerData['문의 내용']
            : customerData['기타 문의'],
        questionType: customerData['문의 유형'],
      });
      webviewToast('서버 제출 전');
      const response = await axios.post(`/web/v2/question/submit`, jsonData, {
        headers: {
          'X-App-Id': 'w:123',
          'Content-Type': `application/json`,
        },
      });
      console.log('RESPONSE----------------', response);

      if (response.data.code === 0) {
        webviewToast('제출 완료');
        console.log('제출 완료', response.data);
        context.setSubmitted(true);
      } else {
        let result = response.data;
        console.log('issue 안돼!: ', result);
      }
    } catch (error) {
      webviewToast(error);
      console.error('result', error);
    }
  }, [customerData, updateErrorMessage]);

  // 이메일 체크 정규식
  function isValidEmail(asValue) {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  }

  // 연락처 체크 정규식
  function isValidNumber(asValue) {
    var regExp = /^\d{3}-?\d{3,4}-?\d{4}$/;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  }

  function submit() {
    console.log('submit');
    if (
      customerData.이름 === '' ||
      customerData.이메일 === '' ||
      !isValidEmail(customerData.이메일) ||
      !agree ||
      (customerData['문의 유형'] === '프로그램 참여요청' &&
        (customerData.회사명 === '' || customerData.직책 === '')) ||
      (customerData['문의 유형'] === '전문가 등록 문의' &&
        customerData.소속 === '') ||
      (customerData['문의 유형'] === '서비스 관련 문의' &&
        customerData['문의 내용'] === '') ||
      (customerData['문의 유형'] !== '전문가 등록 문의' &&
        (customerData.연락처 === '' || !isValidNumber(customerData.연락처)))
    ) {
      console.log('안돼', customerData, errorMessage);
      if (
        customerData.이름 === '' ||
        customerData.이메일 === '' ||
        !isValidEmail(customerData.이메일) ||
        !agree
      ) {
        if (customerData.이름 === '') {
          updateErrorMessage('이름', '필수 입력 항목이에요.');
        }

        if (customerData.이메일 === '') {
          updateErrorMessage('이메일', '필수 입력 항목이에요.');
        } else if (!isValidEmail(customerData.이메일)) {
          updateErrorMessage('이메일', '올바른 이메일 형식으로 입력해주세요.');
        }

        if (!agree) {
          console.log('동의안함');
          setNotifyAgree(true);
        }
      }
      if (
        customerData['문의 유형'] === '프로그램 참여요청' &&
        (customerData.회사명 === '' || customerData.직책 === '')
      ) {
        if (customerData.회사명 === '') {
          updateErrorMessage('회사명', '필수 입력 항목이에요.');
        }
        if (customerData.직책 === '') {
          updateErrorMessage('직책', '필수 입력 항목이에요.');
        }
      }
      if (
        customerData['문의 유형'] === '전문가 등록 문의' &&
        customerData.소속 === ''
      ) {
        updateErrorMessage('소속', '필수 입력 항목이에요.');
      }
      if (
        customerData['문의 유형'] === '서비스 관련 문의' &&
        customerData['문의 내용'] === ''
      ) {
        updateErrorMessage('문의 내용', '필수 입력 항목이에요.');
      }
      if (
        customerData['문의 유형'] !== '전문가 등록 문의' &&
        (customerData['연락처'] === '' || !isValidNumber(customerData.연락처))
      ) {
        if (customerData.연락처 === '') {
          updateErrorMessage('연락처', '필수 입력 항목이에요.');
        } else if (!isValidNumber(customerData.연락처)) {
          updateErrorMessage(
            '연락처',
            '올바른 휴대폰 번호 형식으로 입력해주세요.',
          );
        }
      }
    } else {
      console.log('제출');
      realSubmit();
    }
  }

  return (
    <div className={`w-full flex flex-col items-center `}>
      <div className="font-bold text-[#26282C] text-[27px] leading-[35.1px] wide:text-[40px] wide:leading-[52px] wide:text-center mb-[36px] wide:mb-[52px]">
        {'제안 및 문의'}
      </div>
      <div className="w-full">
        <div
          className={`${
            errorMessage['문의 유형'] !== '' ? 'mb-[20px]' : 'mb-[30px]'
          }`}
        >
          <DropDown
            title={'문의 유형'}
            titleShow
            optional={false}
            value={customerData['문의 유형']}
            errorMessage={errorMessage['문의 유형']}
            options={[
              '프로그램 참여요청',
              '전문가 등록 문의',
              '서비스 관련 문의',
            ]}
            updateValue={updateValue}
          />
        </div>
        {customerData['문의 유형'] === '프로그램 참여요청' && (
          <div
            className={`${
              errorMessage['회사명'] !== '' ? 'mb-[20px]' : 'mb-[30px]'
            }`}
          >
            <Input
              title={'회사명'}
              titleShow
              optional={false}
              placeholder={'회사/기관명을 입력하세요'}
              value={customerData.회사명}
              resetButton={true}
              errorMessage={errorMessage['회사명']}
              errorMessageShow
              updateValue={updateValue}
              updateErrorMessage={updateErrorMessage}
            />
          </div>
        )}
        <div
          className={`${
            errorMessage['이름'] !== '' ? 'mb-[20px]' : 'mb-[30px]'
          }`}
        >
          <Input
            title={'이름'}
            titleShow
            optional={false}
            placeholder={'신청자의 이름을 입력하세요'}
            value={customerData['이름']}
            resetButton={true}
            errorMessage={errorMessage['이름']}
            errorMessageShow
            updateValue={updateValue}
            updateErrorMessage={updateErrorMessage}
          />
        </div>

        {customerData['문의 유형'] === '프로그램 참여요청' && (
          <div
            className={`${
              errorMessage['직책'] !== '' ? 'mb-[20px]' : 'mb-[30px]'
            }`}
          >
            <DropDown
              title={'직책'}
              titleShow
              optional={false}
              value={customerData.직책}
              errorMessage={errorMessage['직책']}
              options={[
                '대표',
                '경영진',
                '인사팀',
                '경영팀',
                '일반직원',
                '기타',
              ]}
              updateValue={updateValue}
              updateErrorMessage={updateErrorMessage}
            />
          </div>
        )}
        {customerData['문의 유형'] !== '전문가 등록 문의' && (
          <div
            className={`${
              errorMessage['연락처'] !== '' ? 'mb-[20px]' : 'mb-[30px]'
            }`}
          >
            <Input
              title={'연락처'}
              titleShow
              optional={false}
              inputMode={'numeric'}
              placeholder={'‘-’ 없이 입력하세요'}
              value={customerData.연락처}
              resetButton={true}
              errorMessage={errorMessage['연락처']}
              errorMessageShow
              updateValue={updateValue}
              updateErrorMessage={updateErrorMessage}
            />
          </div>
        )}
        {customerData['문의 유형'] === '전문가 등록 문의' && (
          <div
            className={`${
              errorMessage['소속'] !== '' ? 'mb-[20px]' : 'mb-[30px]'
            }`}
          >
            <Input
              title={'소속'}
              titleShow
              optional={false}
              placeholder={'소속 센터/병원/의원 정보를 입력하세요'}
              value={customerData.소속}
              resetButton={true}
              errorMessage={errorMessage['소속']}
              errorMessageShow
              updateValue={updateValue}
              updateErrorMessage={updateErrorMessage}
            />
          </div>
        )}
        <div
          className={`${
            errorMessage['이메일'] !== '' ? 'mb-[20px]' : 'mb-[30px]'
          }`}
        >
          <Input
            title={'이메일'}
            titleShow
            optional={false}
            inputMode={'email'}
            placeholder={'inside@inside.com'}
            value={customerData.이메일}
            resetButton={true}
            errorMessage={errorMessage['이메일']}
            errorMessageShow
            updateValue={updateValue}
            updateErrorMessage={updateErrorMessage}
          />
        </div>
        {customerData['문의 유형'] === '프로그램 참여요청' && (
          <div
            className={`${
              errorMessage['기타 문의'] !== '' ? 'mb-[20px]' : 'mb-[30px]'
            }`}
          >
            <Input
              title={'기타 문의'}
              titleShow
              optional={true}
              placeholder={''}
              value={customerData['기타 문의']}
              resetButton={true}
              errorMessage={''}
              errorMessageShow
              updateValue={updateValue}
              updateErrorMessage={updateErrorMessage}
            />
          </div>
        )}
        {customerData['문의 유형'] === '전문가 등록 문의' && (
          <div
            className={`${
              errorMessage['문의 내용'] !== '' ? 'mb-[20px]' : 'mb-[30px]'
            }`}
          >
            <MultilineInput
              title={'기타 문의'}
              titleShow
              optional={true}
              placeholder={'문의 내용을 입력해주세요'}
              value={customerData['기타 문의']}
              resetButton={true}
              errorMessage={''}
              updateValue={updateValue}
              updateErrorMessage={updateErrorMessage}
            />
          </div>
        )}
        {customerData['문의 유형'] === '서비스 관련 문의' && (
          <div
            className={`${
              errorMessage['문의 내용'] !== '' ? 'mb-[20px]' : 'mb-[30px]'
            }`}
          >
            <MultilineInput
              title={'문의 내용'}
              titleShow
              optional={false}
              placeholder={'문의 내용을 입력해주세요'}
              value={customerData['문의 내용']}
              resetButton={true}
              errorMessage={errorMessage['문의 내용']}
              updateValue={updateValue}
              updateErrorMessage={updateErrorMessage}
            />
          </div>
        )}
      </div>
      <PersonalInfoProtection isAgree={isAgree} isNotifyAgree={isNotifyAgree} />
      <Button
        text={'제출하기'}
        style={{ width: context.isWide ? '' : '210px' }}
        click={submit}
      />
    </div>
  );
}
