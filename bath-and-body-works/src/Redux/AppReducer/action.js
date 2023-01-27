import * as types from "./actionType";
import axios from "axios";
const getProductsRequest = () => {
  return { type: types.GET_PRODUCTS_REQUEST };
};

const getProductsSuccess = (payload) => {
  return { type: types.GET_PRODUCTS_SUCCCESS, payload };
};

const getProductsError = () => {
  return { type: types.GET_PRODUCTS_ERROR };
};

const getProducts = (params) => (dispatch) => {
  dispatch(getProductsRequest());

  return axios
    .get(`https://database-bath-body-works-vercel.vercel.app/products`, params)
    .then((r) => {
      dispatch(getProductsSuccess(r.data));
    })
    .catch((e) => {
      dispatch(getProductsError());
    });
};

export {
  getProductsError,
  getProductsRequest,
  getProductsSuccess,
  getProducts,
};
