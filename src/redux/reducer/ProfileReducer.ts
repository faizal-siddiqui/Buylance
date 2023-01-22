import { ProfileTypo } from "../../constants/ProfileTypo";
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
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "../types/ProfileTypes";

interface State {
  loading: boolean;
  error: boolean;
  profile: ProfileTypo[] | [];
  allProfiles: ProfileTypo[];
  auth: boolean;
  id: number | string;
  adminAuth: boolean;
  adminId: number | string;
}

const initialState: State = {
  loading: false,
  error: false,
  profile: [],
  allProfiles: [],
  auth: localStorage.getItem("id") ? true : false,
  id: localStorage.getItem("id") || 0,
  adminAuth: localStorage.getItem("adminId") ? true : false,
  adminId: localStorage.getItem("adminId") || 0,
};

type Action = {
  type: string;
  payload?: any;
};

export const profileReducer = (
  state: State = initialState,
  { type, payload }: Action
): State => {
  switch (type) {
    case PROFILE_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case PROFILE_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case GET_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    }
    case POST_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    }
    case PATCH_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: [payload],
        loading: false,
      };
    }
    case GET_ALLPROFILE_SUCCESS: {
      return {
        ...state,
        allProfiles: payload,
        loading: false,
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        auth: true,
        id: localStorage.getItem("id") || 0,
      };
    }
    case USER_LOGOUT_SUCCESS: {
      return {
        ...state,
        auth: false,
        id: 0,
      };
    }
    case ADMIN_LOGIN_SUCCESS: {
      return {
        ...state,
        adminAuth: true,
        adminId: localStorage.getItem("adminId") || 0,
      };
    }
    case ADMIN_LOGOUT_SUCCESS: {
      return {
        ...state,
        adminAuth: false,
        adminId: 0,
      };
    }
    case PRODUCTS_RESET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
