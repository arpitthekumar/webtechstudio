// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  cartItems: [],
  subtotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
      state.subtotal += action.payload.price * action.payload.quantity;
    },
    removeItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
      if (itemIndex > -1) {
        state.subtotal -= state.cartItems[itemIndex].price * state.cartItems[itemIndex].quantity;
        state.cartItems.splice(itemIndex, 1);
      }
    }
  },
});

export const { toggleCart, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
