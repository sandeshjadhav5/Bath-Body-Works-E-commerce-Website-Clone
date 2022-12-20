import * as types from "./actionType";
import axios from "axios";
const getProductsSuc = (payload) => {
  return { type: types.GET_PRODUCTS_SUCC, payload };
};

const getProductsAdmin = () => (dispatch) => {
  return axios
    .get(`https://database-bath-body-works-vercel.vercel.app/products`)
    .then((r) => {
      dispatch(getProductsSuc(r.data));
    })
    .catch((e) => {
      console.log(e);
    });
};

export { getProductsSuc, getProductsAdmin };
