import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import blogReducer from "./slices/blogSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    auth:authReducer,
    product: productReducer,
    blog:blogReducer,
    cart:cartReducer
  },
});

export default store;
