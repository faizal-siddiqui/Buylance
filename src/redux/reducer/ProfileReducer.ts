import { ProfileTypo } from "../../constants/ProfileTypo";
import { PRODUCTS_RESET } from "../types/ProductsTypes";
import {
  GET_ALLPROFILE_SUCCESS,
  GET_PROFILE_SUCCESS,
  PATCH_PROFILE_SUCCESS,
  POST_PROFILE_SUCCESS,
  PROFILE_ERROR,
  PROFILE_LOADING,
} from "../types/ProfileTypes";

interface State {
  loading: boolean;
  error: boolean;
  profile: ProfileTypo[] | [];
  allProfiles: ProfileTypo[];
}

const initialState: State = {
  loading: false,
  error: false,
  profile: [],
  allProfiles: [],
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
    case PRODUCTS_RESET: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
