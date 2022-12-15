import * as types from "./actionType";

const initialState = {
  isAuth: false,
  token: "",
  isAuthLoading: false,
  isAuthError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return { ...state, isAuthLoading: true };
    case types.USER_LOGIN_SUCCESS:
      return { ...state, isAuthLoading: false, isAuth: true, token: payload };
    case types.USER_LOGIN_ERROR:
      return { ...state, isAuthError: true, isAuth: false, isLoading: false };
    default:
      return state;
  }
};
export { reducer };
