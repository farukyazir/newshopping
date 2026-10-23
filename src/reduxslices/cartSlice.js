
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
    showCart: true,
    cartCount: 0,
    cartState: false
  },

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({
          ...product,
          quantity: 1
        });
      }

      state.cartCount = state.cartItems.length;
      state.cartState = state.cartItems.length > 0;
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      state.cartState = state.cartItems.length > 0;
      state.cartCount = state.cartItems.length;
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const product = state.cartItems.find(
        (item) => item.id === id
      );

      if (product) {
        product.quantity = quantity;
      }
    },

    toggleCart: (state) => {
      state.showCart = !state.showCart;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  toggleCart
} = cartSlice.actions;

export default cartSlice.reducer;
