import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "../slice/rootreducer";
export const store = configureStore({
  reducer: {
    allCart: rootreducer,
  },
});
