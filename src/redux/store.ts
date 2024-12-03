/** @format */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth.features";
import { authApi } from "./api/auth.api";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware(getDfaultMiddleware) {
    return getDfaultMiddleware().concat(authApi.middleware);
  },
});
