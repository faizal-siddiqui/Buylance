import { ProductsTypo } from "../../constants/ProductsTypo";
import { AddressType, ProfileTypo } from "../../constants/ProfileTypo";
import { AppDispatch } from "../store";
import { PRODUCTS_RESET } from "../types/ProductsTypes";
import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT_SUCCESS,
  GET_ALLPROFILE_SUCCESS,
  GET_PROFILE_SUCCESS,
  PATCH_PROFILE_SUCCESS,
  POST_PROFILE_SUCCESS,
  PROFILE_ERROR,
  PROFILE_LOADING,
  PROFILE_RESET,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "../types/ProfileTypes";

import { apiCall } from "./Action.api";

//get profile----------------------------------->
export const getProfile = (id: number) => (dispatch: AppDispatch) => {
  dispatch({ type: PROFILE_LOADING });
  apiCall({
    method: "get",
    url: `http://localhost:8080/profile/${id}`,
  })
    .then((res: ProfileTypo) => {
      dispatch({ type: GET_PROFILE_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: PROFILE_ERROR });
    });
};

//Post profile------------------------------------------>
export const postProfile = (data: ProfileTypo) => (dispatch: AppDispatch) => {
  dispatch({ type: PROFILE_LOADING });
  apiCall({
    method: "post",
    url: `http://localhost:8080/profile`,
    data: {
      ...data,
    },
  })
    .then((res) => {
      dispatch({ type: POST_PROFILE_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: PROFILE_ERROR });
    });
};

//update cart------------------------------------------->
export const updateCart =
  (id: number, data: ProductsTypo[]) => (dispatch: AppDispatch) => {
    dispatch({ type: PROFILE_LOADING });

    apiCall({
      method: "patch",
      url: `http://localhost:8080/profile/${id}`,
      data: {
        cart: data,
      },
    })
      .then((res) => {
        dispatch({ type: PATCH_PROFILE_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: PROFILE_ERROR });
      });
  };

export const updateAddress =
  (id: number, changeAddress: AddressType) => (dispatch: AppDispatch) => {
    dispatch({ type: PROFILE_LOADING });

    apiCall({
      method: "patch",
      url: `http://localhost:8080/profile/${id}`,
      data: {
        location: changeAddress,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch({ type: PATCH_PROFILE_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: PROFILE_ERROR });
      });
  };

//delete cart product------------------------------------------>
export const deleteProduct = (id: number) => (dispatch: AppDispatch) => {
  dispatch({ type: PROFILE_LOADING });
  apiCall({
    method: "patch",
    url: `http://localhost:8080/profile/${id}`,
  })
    .then((res) => {
      dispatch({ type: POST_PROFILE_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: PROFILE_ERROR });
    });
};

//get profile----------------------------------->
export const getAllProfile = () => (dispatch: AppDispatch) => {
  dispatch({ type: PROFILE_LOADING });
  apiCall({
    method: "get",
    url: `http://localhost:8080/profile`,
  })
    .then((res) => {
      dispatch({ type: GET_ALLPROFILE_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: PROFILE_ERROR });
    });
};

//update cart------------------------------------------->
export const patchOrderedProducts =
  (id: number, data: ProductsTypo[]) => (dispatch: AppDispatch) => {
    dispatch({ type: PROFILE_LOADING });

    apiCall({
      method: "patch",
      url: `http://localhost:8080/profile/${id}`,
      data: {
        orderedProducts: data,
      },
    })
      .then((res) => {
        dispatch({ type: PATCH_PROFILE_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: PROFILE_ERROR });
      });
  };

// .............................User Login >

export const UserLogin = () => (dispatch: AppDispatch) => {
  dispatch({ type: USER_LOGIN_SUCCESS });
};

// .............................User Logout >

export const UserLogout = () => (dispatch: AppDispatch) => {
  dispatch({ type: USER_LOGOUT_SUCCESS });
  dispatch({ type: PROFILE_RESET });
  dispatch({ type: PRODUCTS_RESET });
};

// .............................Admin Login >

export const AdminLogin = () => (dispatch: AppDispatch) => {
  dispatch({ type: ADMIN_LOGIN_SUCCESS });
};

// .............................Admin Logout >

export const AdminLogout = () => (dispatch: AppDispatch) => {
  dispatch({ type: ADMIN_LOGOUT_SUCCESS });
  dispatch({ type: PROFILE_RESET });
  dispatch({ type: PRODUCTS_RESET });
};
