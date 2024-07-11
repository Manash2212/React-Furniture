import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./slice/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducers,
  },
});

export default appStore;
