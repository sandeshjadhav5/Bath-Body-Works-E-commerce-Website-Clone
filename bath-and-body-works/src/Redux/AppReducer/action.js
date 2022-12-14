import * as types from "./actionType";

const getProductsRequest = () => {
  return { type: types.GET_PRODUCTS_REQUEST };
};

const getProductsSuccess = (payload) => {
  return { type: types.GET_PRODUCTS_SUCCCESS, payload };
};

const getProductsError = () => {
  return { type: types.GET_PRODUCTS_ERROR };
};

export { getProductsError, getProductsRequest, getProductsSuccess };
