import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsSlice from "./products/productsSlice.ts";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
  products: productsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;


export default store;
