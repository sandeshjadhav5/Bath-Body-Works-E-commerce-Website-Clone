import * as types from "./actiontypes";
const cartPageData = JSON.parse(localStorage.getItem("cartItems")) || [];

const initialState = {
  carts: JSON.parse(localStorage.getItem("cartItems")) || [],

  cartLength: "",
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CART_SUCCESS:
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      let itemIndex = cartItems.findIndex((el) => el.id === payload.id);
      console.log(itemIndex, "itemIndex");
      if (itemIndex === -1) {
        let newState = {
          ...state,
          carts: [...state.carts, { ...payload, quantity: 1 }],
        };
        localStorage.setItem("cartItems", JSON.stringify(newState.carts));
        return newState;
      } else {
        let updatedCartItems = [...state.carts];
        updatedCartItems[itemIndex].quantity++;
        let newState = {
          ...state,
          carts: updatedCartItems,
          cartLength: JSON.parse(localStorage.getItem("cartItems")) || 0,
        };
        localStorage.setItem("cartItems", JSON.stringify(newState.carts));
        return newState;
      }
    case types.UPDATE_QUANTITY:
      let cartItemsLs = JSON.parse(localStorage.getItem("cartItems")) || [];

      let itemIndexLs = cartItemsLs.findIndex((el) => el.id === payload.id);

      let updatedQuantity = [...state.carts];
      updatedQuantity[itemIndexLs].quantity = payload.quantity;
      let newState = {
        ...state,
        carts: updatedQuantity,
      };
      localStorage.setItem("cartItems", JSON.stringify(newState.carts));
      return newState;

    case types.REMOVE_FROM_CART:
      let cartBox = JSON.parse(localStorage.getItem("cartItems")) || [];

      let update = state.carts.filter((el) => el.id !== payload);
      let newCartState = {
        ...state,
        carts: update,
      };
      localStorage.setItem("cartItems", JSON.stringify(newCartState.carts));
      return newCartState;

    case types.EMPTY_CART:
      localStorage.setItem("cartItems", JSON.stringify([]));
      return { ...state, carts: [], cartLength: "" };
    default:
      return state;
  }
};
export { reducer };
