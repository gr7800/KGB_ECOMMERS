import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import blogReducer from "./slices/blogSlice";
import cartReducer from "./slices/cartSlice";
import currencyReducer from "./slices/currencySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    blogs: blogReducer,
    cart: cartReducer,
    currency: currencyReducer
  },
});

export default store;
