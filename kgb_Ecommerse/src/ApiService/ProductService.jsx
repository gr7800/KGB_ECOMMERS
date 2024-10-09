
import axios from 'axios';
import { BaseUrlProduct } from '../utils/constant';

export const fetchProductsApi = async () => {
  const response = await axios.get(BaseUrlProduct);
  return response.data; 
};

export const fetchProductByIdApi = async (id) => {
  const response = await axios.get(`${BaseUrlProduct}/${id}`);
  return response.data; 
};
