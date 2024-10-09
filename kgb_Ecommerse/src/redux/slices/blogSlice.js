import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBlogByIdApi, fetchBlogsApi } from "../../ApiService/BlogService";

const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  return fetchBlogsApi();
});

const fetchBlogsById = createAsyncThunk("blogs/fetchBlogsById", async (id) => {
  return fetchBlogByIdApi(id);
});

export const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    singleblogData: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        console.error("Error while fetching blogs:", action.error.message);
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchBlogsById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBlogsById.fulfilled, (state, action) => {
        state.singleblogData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBlogsById.rejected, (state, action) => {
        console.error("Error while fetching product:", action.error.message);
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
export { fetchBlogs, fetchBlogsById };
