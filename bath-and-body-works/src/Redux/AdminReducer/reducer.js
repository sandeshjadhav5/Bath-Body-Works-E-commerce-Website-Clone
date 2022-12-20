import * as types from "./actionType";

const initialState = {
  productsAdmin: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_SUCC:
      return {
        ...state,

        productsAdmin: payload,
      };

    default:
      return state;
  }
};

export { reducer };
