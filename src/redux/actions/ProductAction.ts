import { ProductsTypo, UpdateProductsTypo } from "../../constants/ProductsTypo";
import { AppDispatch } from "../store";
import {
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  POST_PRODUCTS_SUCCESS,
  PATCH_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_SUCCESS,
} from "../types/ProductsTypes";
import { apiCall } from "./Action.api";

export const getProducts =
  (query = "") =>
  (dispatch: AppDispatch) => {
    dispatch({ type: PRODUCTS_LOADING });
    apiCall({
      method: "get",
      url: `https://buylance-com.onrender.com/products?${query}`,
    })
      .then((res) => {
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: PRODUCTS_ERROR });
      });
  };

export const postProducts = (data: ProductsTypo) => (dispatch: AppDispatch) => {
  dispatch({ type: PRODUCTS_LOADING });
  apiCall({
    method: "post",
    url: "https://buylance-com.onrender.com/products",
    data: {
      ...data,
    },
  })
    .then((res) => {
      dispatch({ type: POST_PRODUCTS_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: PRODUCTS_ERROR });
    });
};

export const patchProducts =
  (id: number, data: UpdateProductsTypo) => (dispatch: AppDispatch) => {
    dispatch({ type: PRODUCTS_LOADING });
    apiCall({
      method: "patch",
      url: `https://buylance-com.onrender.com/products/${id}`,
      data: {
        ...data,
      },
    })
      .then((res) => {
        dispatch({ type: PATCH_PRODUCTS_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: PRODUCTS_ERROR });
      });
  };

export const deleteProducts = (id: number) => (dispatch: AppDispatch) => {
  dispatch({ type: PRODUCTS_LOADING });
  apiCall({
    method: "delete",
    url: `https://buylance-com.onrender.com/products/${id}`,
  })
    .then((res) => {
      dispatch({ type: DELETE_PRODUCTS_SUCCESS, payload: id });
    })
    .catch((err) => {
      dispatch({ type: PRODUCTS_ERROR });
    });
};
