import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {

    // ADD TO CART
    addToCart: (state, action) => {
      const item = action.payload;

      // Check if item already exists
      const existing = state.items.find(
        (i) => i._id === item._id
      );

      if (existing) {
        // If exists → increase quantity
        existing.quantity += 1;
      } 
      else {
        // If new → add with quantity = 1
        state.items.push({
          ...item,
          quantity: 1,
        });
      }
    },

    // REMOVE FROM CART
    removeFromCart: (state, action) => {
      const id = action.payload;

      state.items = state.items.filter(
        (item) => item._id !== id
      );
    },

    // DECREASE QUANTITY
    decreaseQty: (state, action) => {
      const id = action.payload;

      const existing = state.items.find(
        (item) => item._id === id
      );

      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        } else {
          // Remove if quantity = 1
          state.items = state.items.filter(
            (item) => item._id !== id
          );
        }
      }
    },

    // CLEAR CART
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export Actions
export const {
  addToCart,
  removeFromCart,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

// Export Reducer
export default cartSlice.reducer;
