
import axios from 'axios';
import { BaseBlogUrl } from '../utils/constant';

export const fetchBlogsApi = async () => {
  const response = await axios.get(BaseBlogUrl);
  return response.data; 
};

export const fetchBlogByIdApi = async (id) => {
  const response = await axios.get(`${BaseBlogUrl}/${id}`);
  return response.data; 
};
