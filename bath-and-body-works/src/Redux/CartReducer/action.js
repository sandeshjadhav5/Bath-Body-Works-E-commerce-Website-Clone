import * as types from "./actiontypes";

const cartSuccess = (payload) => {
  return { type: types.CART_SUCCESS, payload };
};
export { cartSuccess };
