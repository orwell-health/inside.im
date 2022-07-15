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
  setIsWide: () => {},
  setMobileAuthKey: () => {},
  setShowLoginPopup: () => {},
  setSubmitted: () => {},
});

function homepageReducer(state, action) {
  switch (action.type) {
    case 'SET_IS_WIDE':
      return {
        ...state,
        isWide: action.payload,
      };
    case 'SET_MOBILE_AUTH_KEY':
      return {
        ...state,
        mobileAuthKey: action.payload,
      };
    case 'SET_SHOW_LOGIN_POPUP':
      return {
        ...state,
        showLoginPopup: action.payload,
      };
    case 'SET_SUBMITTED':
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
      type: 'SET_IS_WIDE',
      payload: isWide,
    });
  }
  function setMobileAuthKey(mobileAuthKey) {
    dispatch({
      type: 'SET_MOBILE_AUTH_KEY',
      payload: mobileAuthKey,
    });
  }
  function setShowLoginPopup(showLoginPopup) {
    dispatch({
      type: 'SET_SHOW_LOGIN_POPUP',
      payload: showLoginPopup,
    });
  }

  function setSubmitted(submitted) {
    dispatch({
      type: 'SET_SUBMITTED',
      payload: submitted,
    });
  }

  return (
    <HomepageContext.Provider
      value={{
        ...state,
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
