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

export { loginUser, userLoginRequest, userLoginSuccess, userLoginError };

// toast({
//   title: `You are Successfully Logged in`,
//   status: "success",
//   duration: 4000,
//   isClosable: true,
// });
// navigate("/");

// console.log(err);
// toast({
//   title: "Login Failed",
//   description: "Please Enter Correct Details",
//   status: "error",
//   duration: 5000,
//   isClosable: true,
// });
