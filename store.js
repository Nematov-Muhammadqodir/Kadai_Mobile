import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartItemsSlice,
  },
});
