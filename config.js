export const HOST_API = process.env.REACT_APP_API_SERVER_HOST || '';
export const BUILD_TARGET = process.env.REACT_APP_BUILD_TARGET || 'dev';
export const API_KEY = process.env.REACT_APP_API_KEY || '';

export const PROFILE_DISPLAY = BUILD_TARGET === 'real' ? '' : `${BUILD_TARGET} | `;
