import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authenticationReducer from "../features/login/loginSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authenticationReducer,
  },
});
