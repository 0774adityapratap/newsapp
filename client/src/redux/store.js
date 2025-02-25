import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    count: counterReducer,
    auth: authReducer
  },
});

export default store;
