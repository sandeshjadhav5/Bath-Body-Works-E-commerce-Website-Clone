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

const getProducts = () => {
  axios
    .get(`https://database-bath-body-works-vercel.vercel.app/products`)
    .then((r) => {
      console.log(r.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
export { getProductsError, getProductsRequest, getProductsSuccess };
