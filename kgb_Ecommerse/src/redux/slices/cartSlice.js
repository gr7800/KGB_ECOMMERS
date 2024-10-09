import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromLocalStorage(),
    totalQuantity: loadCartFromLocalStorage().reduce((acc, item) => acc + item.quantity, 0), // Calculate total quantity
  },
  reducers: {
    addItem: (state, action) => {
      
    },
    removeItem: (state, action) => {
      
    },
    clearCart: (state) => {
    
    },
    updateItemQuantity: (state, action) => {
      
    },
  },
});

export const { addItem, removeItem, clearCart, updateItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
