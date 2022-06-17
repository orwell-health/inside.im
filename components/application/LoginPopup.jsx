import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { Input } from '../../../stories/homepage/Input';
import { DropDown } from '../../../stories/homepage/DropDown';
import axios from '../../../utils/axios';
import { HomepageContext } from '../../../homepageContext';

export default function LoginPopup(props) {
  const { isLoggedIn } = props;
  const context = useContext(HomepageContext);
  const [showCodeInput, setShowCodeInput] = useState(false);

  const [mobileAuthKeyConfirm, setMobileAuthKeyConfirm] = useState(false);

  const [userData, setUserData] = useState({
    이름: '',
    '주민번호 앞자리': '',
    성별: '',
    통신사: 'SKT',
    '휴대폰 번호': '',
    인증번호: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    이름: '',
    '주민번호 앞자리': '',
    성별: '',
    통신사: '',
    '휴대폰 번호': '',
    인증번호: '',
  });

  function updateValue(title, value) {
    console.log(title, value, userData);
    setUserData((prevState) => ({
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

  const mobileAuthcodeIssue = useCallback(async () => {
    try {
      const jsonData = JSON.stringify({
        mobileNumber: userData['휴대폰 번호'],
        mobileProvider: userData['성별'],
        name: userData['이름'],
        rrnBackFirstDigit: userData['성별'],
        rrnFrontDigits: userData['주민번호 앞자리'],
      });
      const response = await axios.post(
        `/web/v2/mobile-auth/code/issue`,
        jsonData,
        {
          headers: {
            'X-App-Id': 'w:123',
            'Content-Type': `application/json`,
          },
        },
      );
      console.log('response', response);
      if (response.data.code === 0) {
        console.log('정상', response.data.result.mobileAuthKey);
        setShowCodeInput(true);
        context.setMobileAuthKey(response.data.result.mobileAuthKey);
      } else {
        let result = response.data.message;
        console.log('issue 안돼!: ', result);
      }
    } catch (error) {
      console.error('result', error);
    }
  }, [userData, updateErrorMessage]);

  const mobileAuthcodeConfirm = useCallback(async () => {
    try {
      console.log('confirm api 호출');
      const jsonData = JSON.stringify({
        code: userData['인증번호'],
        mobileAuthKey: context.mobileAuthKey,
      });
      const response = await axios.post(
        `/web/v2/mobile-auth/code/confirm`,
        jsonData,
        {
          headers: {
            'X-App-Id': 'w:123',
            'Content-Type': `application/json`,
          },
        },
      );
      console.log('response', response);
      if (response.data.code === 0) {
        let result = response.data;
        console.log('정상', result);
        updateErrorMessage('인증번호', '');
        setMobileAuthKeyConfirm(true);
        isLoggedIn();
      } else {
        let result = response.data.message;
        console.log('confirm 안돼!: ', result);
        setMobileAuthKeyConfirm(false);
        updateErrorMessage('인증번호', response.data.message);
      }
    } catch (error) {
      console.error('result', error);
    }
  }, [context.mobileAuthKey, userData]);

  function codeRequest() {
    if (
      userData.이름 === '' ||
      userData['주민번호 앞자리'] === '' ||
      userData['성별'] === '' ||
      userData['휴대폰 번호'] === ''
    ) {
      if (userData.이름 === '') {
        updateErrorMessage('이름', '정보를 입력하세요.');
      }
      if (userData['주민번호 앞자리'] === '') {
        updateErrorMessage('주민번호 앞자리', '정보를 입력하세요.');
      } else if (userData.성별 === '') {
        updateErrorMessage('성별', '정보를 입력하세요.');
      }
      if (userData['휴대폰 번호'] === '') {
        updateErrorMessage('휴대폰 번호', '정보를 입력하세요.');
      }
    } else {
      console.log('제출');
      mobileAuthcodeIssue();
    }
  }

  return (
    <div
      className={`w-screen wide:w-[500px] h-screen wide:h-auto py-[60px] px-[40px] wide:px-[90px] bg-[#F6F8FF] flex flex-col 
      wide:rounded-[20px] wide:ring-[1px] wide:ring-inset wide:ring-[#0000001A] wide:shadow-loginPopup`}
    >
      <div className="mb-[30px] mx-auto">
        <svg
          width="88"
          height="26"
          viewBox="0 0 88 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.14144 6.97984C4.87641 6.97984 6.28288 5.61519 6.28288 3.93181C6.28288 2.24844 4.87641 0.883789 3.14144 0.883789C1.40647 0.883789 0 2.24844 0 3.93181C0 5.61519 1.40647 6.97984 3.14144 6.97984ZM47.1395 6.97984C48.8745 6.97984 50.2809 5.61519 50.2809 3.93181C50.2809 2.24844 48.8745 0.883789 47.1395 0.883789C45.4045 0.883789 43.998 2.24844 43.998 3.93181C43.998 5.61519 45.4045 6.97984 47.1395 6.97984ZM58.1941 25.0299C60.6458 25.0299 62.6072 23.8405 63.3733 21.8631V24.6731H69.6558V3.21934H63.3733V11.218C62.5765 9.13659 60.6458 7.90259 58.2248 7.90259C53.9649 7.90259 51.5898 10.9653 51.5898 16.4663C51.5898 21.9375 53.9956 25.0299 58.1941 25.0299ZM60.6611 20.1236C59.0216 20.1236 57.9643 18.7261 57.9643 16.4662C57.9643 14.1767 59.0369 12.8089 60.6611 12.8089C62.3007 12.8089 63.3733 14.1767 63.3733 16.4811C63.3733 18.7707 62.316 20.1236 60.6611 20.1236ZM50.2786 24.6651H43.9962V8.25145H50.2786V24.6651ZM34.7755 25.1295C39.6789 25.1295 42.958 22.9291 42.958 19.3907C42.958 16.9078 41.3185 15.5103 37.6716 14.8561L34.607 14.306C33.0746 14.0235 32.6456 13.6964 32.6456 13.1166C32.6456 12.4178 33.3964 11.9867 34.5457 11.9867C35.8941 11.9867 36.6602 12.849 36.7522 13.6221H42.4524C42.4524 10.6337 39.7862 8.0022 34.5457 8.0022C29.6269 8.0022 26.6389 10.0539 26.6389 13.4586C26.6389 16.0009 28.4164 17.7404 31.7722 18.3351L34.8368 18.8852C36.2312 19.1379 36.7369 19.4947 36.7369 20.0894C36.7369 20.7436 35.986 21.145 34.7755 21.145C33.3658 21.145 32.569 20.4611 32.3238 19.5096H26.2559C26.6389 22.7804 29.4431 25.1295 34.7755 25.1295ZM7.86328 24.659H14.1458V15.4412C14.1458 13.9098 15.0498 12.7948 16.5362 12.7948C18.1145 12.7948 18.9113 13.8058 18.9113 15.4561V24.659H25.1938V14.118C25.1938 10.1781 23.1098 7.88855 19.3863 7.88855C16.8273 7.88855 14.9732 9.07794 14.1458 11.2932V8.24537H7.86328V24.659ZM0 24.7056H6.28248V8.29201H0V24.7056ZM87.8056 19.3365C87.3001 21.4774 85.3239 25.0159 79.4412 25.0159C73.9568 25.0159 70.6172 21.7896 70.6172 16.4522C70.6172 11.1148 73.9568 7.88855 79.242 7.88855C84.5119 7.88855 87.8822 11.0999 87.8822 16.0954V17.82H76.745C76.8062 19.7082 77.848 20.8232 79.5637 20.8232C81.2182 20.8232 82.0455 19.8123 82.214 19.3365H87.8056ZM81.9995 14.3708C81.7238 12.9137 80.774 12.0812 79.4106 12.0812C78.0471 12.0812 77.0973 12.9137 76.8216 14.3708H81.9995Z"
            fill="url(#paint0_radial_258_42455)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_258_42455"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(87.735 17.3743) rotate(-174.276) scale(88.1748 301.081)"
            >
              <stop stop-color="#5513F0" />
              <stop offset="1" stop-color="#2C4BEC" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="text-[30px] leading-[39px] font-bold text-[#26282C] text-center mb-[50px]">
        {['휴대폰 본인인증으로', <br />, '간편하게 로그인하세요']}
      </div>
      <div className="w-full mb-[20px]">
        <Input
          title={'이름'}
          optional={false}
          placeholder={'이름을 입력하세요'}
          value={userData['이름']}
          errorMessage={errorMessage['이름']}
          errorMessageShow
          updateValue={updateValue}
          updateErrorMessage={updateErrorMessage}
        />
      </div>
      <div
        className={`w-full flex items-center justify-between ${
          errorMessage['주민번호 앞자리'] !== '' || errorMessage['성별'] !== ''
            ? 'mb-[5px]'
            : 'mb-[20px]'
        } `}
      >
        <div className="w-[150px] shrink-0">
          <Input
            title={'주민번호 앞자리'}
            optional={false}
            inputMode={'numeric'}
            placeholder={'주민번호 앞자리'}
            value={userData['주민번호 앞자리']}
            errorMessage={errorMessage['주민번호 앞자리']}
            updateValue={updateValue}
            updateErrorMessage={updateErrorMessage}
          />
        </div>
        <p className="text-[18px] leading-[26.06px] font-bold text-[#26282C] mx-[6px]">
          -
        </p>
        <div className="flex items-center">
          <div className="w-[50px] mr-[8px]">
            <Input
              title={'성별'}
              optional={false}
              inputMode={'numeric'}
              placeholder={''}
              value={userData['성별']}
              errorMessage={errorMessage['성별']}
              updateValue={updateValue}
              updateErrorMessage={updateErrorMessage}
            />
          </div>
          {[0, 0, 0, 0, 0, 0].map((each, index) => (
            <div
              className={`w-[10px] h-[10px] rounded-[10px] bg-[#80838B] ${
                index === 5 ? '' : 'mr-[4px]'
              }`}
            />
          ))}
        </div>
      </div>
      {errorMessage['주민번호 앞자리'] !== '' && (
        <div className=" text-[#E32940] text-[15px] leading-[21.72px]  mb-[20px]">
          {errorMessage['주민번호 앞자리']}
        </div>
      )}
      {errorMessage['성별'] !== '' && (
        <div className=" text-[#E32940] text-[15px] leading-[21.72px]  mb-[20px]">
          {errorMessage['성별']}
        </div>
      )}
      <div
        className={`${
          errorMessage['휴대폰 번호'] !== '' ? 'mb-[5px]' : 'mb-[20px]'
        }  flex items-center justify-between`}
      >
        <div className={`w-[128px]  mr-[10px]`}>
          <DropDown
            title={'통신사'}
            optional={false}
            value={userData['통신사']}
            errorMessage={errorMessage['통신사']}
            options={[
              'SKT',
              'KT',
              'LG',
              'SKT 알뜰폰',
              'KT 알뜰폰',
              'LG 알뜰폰',
            ]}
            updateValue={updateValue}
            updateErrorMessage={updateErrorMessage}
          />
        </div>
        <div className="flex-1">
          <Input
            title={'휴대폰 번호'}
            optional={false}
            inputMode={'numeric'}
            placeholder={'휴대폰 번호'}
            value={userData['휴대폰 번호']}
            errorMessage={errorMessage['휴대폰 번호']}
            updateValue={updateValue}
            updateErrorMessage={updateErrorMessage}
          />
        </div>
      </div>
      {errorMessage['휴대폰 번호'] !== '' && (
        <div className=" text-[#E32940] text-[15px] leading-[21.72px]  mb-[20px]">
          {errorMessage['휴대폰 번호']}
        </div>
      )}
      {showCodeInput && (
        <div>
          <div
            className={`w-full ${
              mobileAuthKeyConfirm ? 'mb-[20px]' : 'mb-[5px]'
            } relative`}
          >
            <Input
              title={'인증번호'}
              optional={false}
              placeholder={'인증번호 6자리'}
              value={userData['인증번호']}
              errorMessage={''}
              // errorMessageShow
              updateValue={updateValue}
              updateErrorMessage={updateErrorMessage}
            />
            {/* <div className="absolute top-[18px] text-[15px] leading-[17.9px] text-[#3953D9] right-[20px]">3:00</div> */}
          </div>
          {!mobileAuthKeyConfirm && errorMessage['인증번호'] !== '' && (
            <div className=" text-[#E32940] text-[15px] leading-[21.72px]  mb-[20px]">
              {errorMessage['인증번호']}
            </div>
          )}
          {!mobileAuthKeyConfirm && errorMessage['인증번호'] === '' && (
            <div className=" text-[#3953D9] text-[15px] leading-[21.72px]  mb-[20px]">
              {'전송된 인증번호를 입력하세요.'}
            </div>
          )}
        </div>
      )}

      {!showCodeInput && (
        <div
          className="w-full h-[50px] pt-[10px] pb-[15px] rounded-[12px] text-white font-normal text-[17px] leading-[26.62px] bg-[#26282C] text-center"
          onClick={codeRequest}
        >
          인증 요청
        </div>
      )}
      {showCodeInput && (
        <div className="w-full h-[50px] flex">
          <div
            className="w-[138px] h-full pt-[10px] pb-[15px] rounded-[12px] ring-[1px] ring-inset ring-[#D1D5DC] text-[#26282C]] font-normal text-[17px] leading-[26.62px] bg-white text-center
            mr-[5px]"
            onClick={() => {
              codeRequest();
              updateValue('인증번호', '');
            }}
          >
            다시 받기
          </div>
          <div
            className="flex-1 h-full pt-[10px] pb-[15px] rounded-[12px] text-white font-normal text-[17px] leading-[26.62px] bg-[#26282C] text-center"
            onClick={mobileAuthcodeConfirm}
          >
            확인
          </div>
        </div>
      )}
    </div>
  );
}
