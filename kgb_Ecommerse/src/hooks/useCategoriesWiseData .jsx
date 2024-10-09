import React, { useEffect, useState } from "react";
import { BaseUrlProduct } from "../utils/constant";
import axios from "axios";

const useCategoriesWiseData = (categoryName) => {
  const [items, setItems] = useState([]);

  const fetchCategoryData = async (categoryName) => {
    const response = await axios.get(
      `${BaseUrlProduct}/category/${categoryName}?limit=4`
    );
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
