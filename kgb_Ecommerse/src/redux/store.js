import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    product: productReducer,
  },
});

export default store;
