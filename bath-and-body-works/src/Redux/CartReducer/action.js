import * as types from "./actiontypes";

const cartSuccess = (payload) => {
  return { type: types.CART_SUCCESS, payload };
};

const emptyCart = () => {
  console.log("inside");
  return { type: types.EMPTY_CART };
};

export { cartSuccess, emptyCart };
