import { configureStore } from "@reduxjs/toolkit";
import InfoSlice from "./InfoSlice";

export const store = configureStore({
  reducer: {
    info: InfoSlice,
  },
});
