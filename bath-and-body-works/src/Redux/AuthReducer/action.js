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
// const Signip=(newEntry)=>{
// console.log(newEntry)
// }
export { userLoginRequest, userLoginSuccess, userLoginError };
