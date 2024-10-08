import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
});

const fetchProductById = createAsyncThunk("products/fetchProductById",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    return response.json();
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
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
      });
  },
});

export default productSlice.reducer;
export { fetchProducts, fetchProductById };
