import * as types from "./actionType";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const userLoginRequest = () => {
  return { type: types.USER_LOGIN_REQUEST };
};

const userLoginSuccess = () => {
  return { type: types.USER_LOGIN_SUCCESS };
};

const userLoginError = () => {
  return { type: types.USER_LOGIN_ERROR };
};

const userLogout = () => {
  return { type: types.USER_LOGOUT };
};

const loginUser = (payload) => (dispatch) => {
  console.log(payload, "invoked");
  dispatch(userLoginRequest());
  return axios
    .post(`https://reqres.in/api/login`, payload)
    .then((res) => {
      dispatch(userLoginSuccess());
    })
    .catch((err) => {
      console.log(err);
      dispatch(userLoginError());
    });
};

export {
  userLogout,
  loginUser,
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
};
