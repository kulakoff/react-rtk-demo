import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger'
import { postAPI } from "../services/PostService";
import userReducer from "../store/reducers/UserSlice";

const rootReducer = combineReducers({
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(postAPI.middleware,createLogger())
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
