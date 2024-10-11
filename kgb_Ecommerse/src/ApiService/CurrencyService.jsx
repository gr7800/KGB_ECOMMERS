import axios from "axios";
import { ApiKey, CurrencyExchangeUrl } from "../utils/constant";

export const fetchExchangeRateApi = async (currentCurrency) => {
  const response = await axios.get(
    `${CurrencyExchangeUrl}?base=USD&to=${currentCurrency}&amount=1&apiKey=${ApiKey}`
  );
  return response.data;
};
