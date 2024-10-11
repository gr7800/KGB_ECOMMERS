import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchExchangeRateApi } from "../../ApiService/CurrencyService";

const fetchExchangeRate = createAsyncThunk(
  "currency/fetchExchangeRate",
  async (currentCurrency) => {
    return fetchExchangeRateApi(currentCurrency);
  }
);

export const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currentCurrency: "INR",
    exchangeRateData: null,
    exchangeRate: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    selectCurrency: (state, action) => {
      state.currentCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRate.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchExchangeRate.fulfilled, (state, action) => {
        state.exchangeRateData = action.payload;
        state.exchangeRate = state.exchangeRateData.rate
        state.isLoading = false;
      })
      .addCase(fetchExchangeRate.rejected, (state, action) => {
        console.error(
          "Error while fetching exchange rate:",
          action.error.message
        );
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default currencySlice.reducer;
export const { selectCurrency, priceConverting } = currencySlice.actions;
export { fetchExchangeRate };
