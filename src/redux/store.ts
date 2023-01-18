import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { productsReducer } from "./reducer/ProductsReducer";
import { profileReducer } from "./reducer/ProfileReducer";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducers = combineReducers({
  productManager: productsReducer,
  profileManager: profileReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducers,
  composeEnhancer(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFn = () => AppDispatch;

export const useAppDispatch: DispatchFn = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
