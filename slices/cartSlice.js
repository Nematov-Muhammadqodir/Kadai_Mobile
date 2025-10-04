import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const loadCartData = async () => {
  try {
    const storedCartJson = await AsyncStorage.getItem("cartData");
    return storedCartJson ? JSON.parse(storedCartJson) : [];
  } catch (error) {
    console.error("Error loading cart data:", error);
    return [];
  }
};

const initialState = {
  items: [],
};

// you can’t use `await` directly in reducers, so load data outside Redux
loadCartData().then((data) => {
  initialState.items = data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existing) {
        existing.quantity = (existing.quantity ?? 1) + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      AsyncStorage.setItem("cartData", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const existing = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existing) {
        if ((existing.quantity ?? 1) === 1) {
          state.items = state.items.filter(
            (item) => item._id !== action.payload._id
          );
        } else {
          existing.quantity -= 1;
        }
      }
      AsyncStorage.setItem("cartData", JSON.stringify(state.items));
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      AsyncStorage.setItem("cartData", JSON.stringify(state.items));
    },
    deleteAll: (state) => {
      state.items = [];
      AsyncStorage.removeItem("cartData");
    },
  },
});

export const { addItem, removeItem, deleteItem, deleteAll } = cartSlice.actions;
export const cartItemsValue = (state) => state.cart.items;
export default cartSlice.reducer;
