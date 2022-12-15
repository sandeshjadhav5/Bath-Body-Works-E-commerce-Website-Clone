import * as types from "./actionType";

const initialState = {
  products: [],
  isProductsLoading: false,
  isProductsError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return { ...state, isProductsLoading: true };
    case types.GET_PRODUCTS_SUCCCESS:
      return {
        ...state,
        isProductsError: false,
        isProductsLoading: false,
        products: payload,
      };
    case types.GET_PRODUCTS_ERROR:
      return {
        ...state,
        isProductsError: true,
        isProductsLoading: false,
      };
    default:
      return state;
  }
};

export { reducer };
