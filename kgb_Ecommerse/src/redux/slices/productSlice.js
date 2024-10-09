import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProductCategories,
  fetchProductByIdApi,
  fetchProductsApi,
} from "../../ApiService/ProductService";

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  return fetchProductsApi();
});

const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    return fetchProductByIdApi(id);
  }
);

const fetchAllCategories = createAsyncThunk(
  "products/fetchAllCategories",
  async () => fetchAllProductCategories()
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    category: [],
    singleProduct: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.error("Error while fetching products:", action.error.message);
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        console.error("Error while fetching product:", action.error.message);
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAllCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.category = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        console.error("Error while fetching product:", action.error.message);
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
export { fetchProducts, fetchProductById, fetchAllCategories };
