/* eslint-disable default-case */
import React, { useReducer, createContext } from 'react';

const initialState = {
  isWide: false,
  mobileAuthKey: '',
  showLoginPopup: false,
  submitted: false,
};

const HomepageContext = createContext({
  ...initialState,
  isWide: true,
  mobileAuthKey: '',
  showLoginPopup: false,
  submitted: false,
  setIsWide: (isWide) => {},
  setMobileAuthKey: (mobileAuthKey) => {},
  setShowLoginPopup: (showLoginPopup) => {},
  setSubmitted: (submitted) => {},
});

function homepageReducer(state, action) {
  switch (action.type) {
    case 'SETISWIDE':
      return {
        ...state,
        isWide: action.payload,
      };
    case 'SETMOBILEAUTHKEY':
      return {
        ...state,
        mobileAuthKey: action.payload,
      };
    case 'SETSHOWLOGINPOPUP':
      return {
        ...state,
        showLoginPopup: action.payload,
      };
    case 'SETSUBMITTED':
      return {
        ...state,
        submitted: action.payload,
      };
  }
}

function HomepageProvider(props) {
  const [state, dispatch] = useReducer(homepageReducer, initialState);

  function setIsWide(isWide) {
    dispatch({
      type: 'SETISWIDE',
      payload: isWide,
    });
  }
  function setMobileAuthKey(mobileAuthKey) {
    dispatch({
      type: 'SETMOBILEAUTHKEY',
      payload: mobileAuthKey,
    });
  }
  function setShowLoginPopup(showLoginPopup) {
    dispatch({
      type: 'SETSHOWLOGINPOPUP',
      payload: showLoginPopup,
    });
  }

  function setSubmitted(submitted) {
    dispatch({
      type: 'SETSUBMITTED',
      payload: submitted,
    });
  }

  return (
    <HomepageContext.Provider
      value={{
        isWide: state.isWide,
        mobileAuthKey: state.mobileAuthKey,
        showLoginPopup: state.showLoginPopup,
        submitted: state.submitted,
        setIsWide,
        setMobileAuthKey,
        setShowLoginPopup,
        setSubmitted,
      }}
      {...props}
    />
  );
}

export { HomepageContext, HomepageProvider };
