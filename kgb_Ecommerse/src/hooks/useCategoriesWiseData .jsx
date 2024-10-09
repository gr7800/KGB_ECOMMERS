import React from "react";
import { BaseUrlProduct } from "../utils/constant";

const useCategoriesWiseData = (categoryName) => {
  const [items, setItems] = useState([]);

  const fetchCategoryData = async (categoryName) => {
    const response = await axios.get(`${BaseUrlProduct}/category/jewelery`);
    setItems(response.data);
    return response.data;
  };

  useEffect(() => {
    if (categoryName) {
      fetchCategoryData(categoryName);
    }
  }, [categoryName]);

  return { items };
};

export default useCategoriesWiseData;
