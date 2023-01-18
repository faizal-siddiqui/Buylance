import { ProfileTypo } from "../../constants/ProfileTypo";
import { AppDispatch } from "../store";
import {
  GET_PROFILE_SUCCESS,
  POST_PROFILE_SUCCESS,
  PROFILE_ERROR,
  PROFILE_LOADING,
} from "../types/ProfileTypes";

import { apiCall } from "./Action.api";

export const getProfile =
  (email: string, password: string) => (dispatch: AppDispatch) => {
    dispatch({ type: PROFILE_LOADING });
    apiCall({
      method: "get",
      url: `http://localhost:8080/profile?email=${email}&password=${password}`,
    })
      .then((res) => {
        dispatch({ type: GET_PROFILE_SUCCESS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: PROFILE_ERROR });
      });
  };

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
