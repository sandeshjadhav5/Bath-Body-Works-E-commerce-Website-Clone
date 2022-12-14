import * as types from "./actionType";

const userLoginRequest = () => {
  return { type: types.USER_LOGIN_REQUEST };
};

const userLoginSuccess = () => {
  return { type: types.USER_LOGIN_SUCCESS };
};

const userLoginError = () => {
  return { type: types.USER_LOGIN_ERROR };
};

export { userLoginRequest, userLoginSuccess, userLoginError };
