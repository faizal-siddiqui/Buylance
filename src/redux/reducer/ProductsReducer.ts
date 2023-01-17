import { ProductsTypo } from "../../constants/ProductsTypo";
import {
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  POST_PRODUCTS_SUCCESS,
  PATCH_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_SUCCESS,
  PRODUCTS_RESET,
} from "../types/ProductsTypes";

interface State {
  loading: boolean;
  error: boolean;
  products: ProductsTypo[] | [];
}

type Action = {
  type: string;
  payload?: any;
};

const initialState: State = {
  loading: false,
  error: false,
  products: [],
};

export const productsReducer = (
  state: State = initialState,
  { type, payload }: Action
): State => {
  switch (type) {
    case PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case PRODUCTS_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: payload,
        loading: false,
      };
    }
    case PATCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: state.products.map((prod) => {
          if (prod.id === payload.id) {
            return payload;
          }
          return prod;
        }),
        loading: false,
      };
    }
    case POST_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: [...state.products, payload],
        loading: false,
      };
    }
    case DELETE_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: state.products.filter((prod) => {
          return prod.id != payload.id;
        }),
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
