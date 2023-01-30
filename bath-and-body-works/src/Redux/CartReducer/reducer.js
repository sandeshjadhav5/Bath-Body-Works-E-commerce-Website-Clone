import * as types from "./actiontypes";

const initialState = {
  carts: [],
  cartLength: "",
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CART_SUCCESS:
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartItems.push(payload);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      const cartLength = cartItems.length;
      return {
        ...state,
        carts: [...state.carts, payload],
        cartLength: JSON.parse(localStorage.getItem("cartItems")) || 0,
      };
    case types.EMPTY_CART:
      localStorage.setItem("cartItems", JSON.stringify([]));
      return { ...state, carts: [], cartLength: "" };
    default:
      return state;
  }
};
export { reducer };
