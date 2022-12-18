import * as types from "./actiontypes";

const initialState = {
  carts: [],
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CART_SUCCESS:
      return { ...state, carts: payload };
    default:
      return state;
  }
};
export { reducer };
