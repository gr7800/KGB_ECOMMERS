import axios from "axios";
import { BaseUrlProduct } from "../utils/constant";

export const fetchProductsApi = async () => {
  const response = await axios.get(`${BaseUrlProduct}/api/product`);
  return response.data;
};

export const fetchProductByIdApi = async (id) => {
  const response = await axios.get(`${BaseUrlProduct}/api/product/${id}`);
  return response.data;
};

export const fetchAllProductCategories = async () => {
  const response = await axios.get(
    `${BaseUrlProduct}/api/product/categories/All`
  );
  return response.data;
};
