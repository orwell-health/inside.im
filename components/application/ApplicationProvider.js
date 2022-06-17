import React, { useState, useRef, useEffect, useContext } from 'react';

import { HomepageContext } from '../homepageContext';
import { Input } from '../elements/Input';
import { Select } from '../elements/Select';
import { Button } from '../elements/Button';
import PersonalInfoProtection from '../component/PersonalInfoProtection';
// import axios from '../../../utils/axios';

export default function ApplicationProvider(props) {
  const context = useContext(HomepageContext);
  const [agree, setAgree] = useState(false);
  const [providerData, setProviderData] = useState({
    등록형태: '상담사 등록',
    이메일: '',
    소속: '',
    '기타 문의': '',
  });
  const [errorMessage, setErrorMessage] = useState({
    이메일: '',
    소속: '',
    '기타 문의': '',
  });
  const [isNotifyAgree, setNotifyAgree] = useState(false);

  useEffect(() => {
    console.log('errormessage change', errorMessage, providerData);
  }, [errorMessage, providerData]);

  function updateValue(title, value) {
    console.log(title, value, providerData);
    setProviderData((prevState) => ({
      ...prevState,
      [title]: value,
    }));
  }

  function updateErrorMessage(title, value) {
    console.log('errormessage', title, value, errorMessage);
    setErrorMessage((prevState) => ({
      ...prevState,
      [title]: value,
    }));
  }

  function isAgree(agree) {
    console.log('agreed', agree);
    setAgree(agree);
    setNotifyAgree(false);
  }
  // 이메일 체크 정규식
  function isValidEmail(asValue) {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  }

  function submit() {
    if (
      providerData.이메일 === '' ||
      !isValidEmail(providerData.이메일) ||
      providerData.소속 === '' ||
      !agree
    ) {
      if (providerData.이메일 === '') {
        updateErrorMessage('이메일', '필수 입력 항목이에요.');
      } else if (!isValidEmail(providerData.이메일)) {
        updateErrorMessage('이메일', '올바른 이메일 형식으로 입력해주세요.');
      }
      if (providerData.소속 === '') {
        updateErrorMessage('소속', '필수 입력 항목이에요.');
      }
      if (!agree) {
        console.log('동의안함');
        setNotifyAgree(true);
      }
    } else {
      console.log('제출');
      if (context.mobileAuthKey === '') {
        console.log('로그인 안함');
        context.setShowLoginPopup(true);
      } else {
        console.log('로그인 됨');
      }
    }
  }

  return (
    <div className={`w-full flex flex-col items-center relative`}>
      <div className="font-bold text-[#26282C] text-[27px] leading-[35.1px] text-[40px] leading-[52px] wide:text-center mb-[36px] wide:mb-[52px]">
        {'상담사 및 의사 등록 신청'}
      </div>
      <div className="w-full">
        <Select
          title={'등록형태'}
          optional={false}
          value={'상담사 등록'}
          options={['상담사 등록', '의사 등록']}
          updateValue={updateValue}
        />
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
            value={providerData['이메일']}
            resetButton={true}
            errorMessage={errorMessage['이메일']}
            errorMessageShow
            updateValue={updateValue}
            updateErrorMessage={updateErrorMessage}
          />
        </div>
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
            value={providerData['소속']}
            resetButton={true}
            errorMessage={errorMessage['소속']}
            errorMessageShow
            updateValue={updateValue}
            updateErrorMessage={updateErrorMessage}
          />
        </div>
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
            value={providerData['기타 문의']}
            resetButton={true}
            errorMessage={''}
            errorMessageShow
            updateValue={updateValue}
            updateErrorMessage={updateErrorMessage}
          />
        </div>
      </div>
      <PersonalInfoProtection isAgree={isAgree} isNotifyAgree={isNotifyAgree} />
      <Button
        text={'제출하기'}
        style={{ width: context.isWide ? '' : '210px' }}
        onClick={submit}
      />
    </div>
  );
}
