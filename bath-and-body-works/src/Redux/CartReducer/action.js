import * as types from "./actiontypes";

const cartSuccess = (payload) => {
  return { type: types.CART_SUCCESS, payload };
};

const updateQuantity = (payload) => {
  return { type: types.UPDATE_QUANTITY, payload };
};

const deleteFromCart = (payload) => {
  return { type: types.REMOVE_FROM_CART, payload };
};
const emptyCart = () => {
  console.log("inside");
  return { type: types.EMPTY_CART };
};

export { cartSuccess, emptyCart, updateQuantity, deleteFromCart };
