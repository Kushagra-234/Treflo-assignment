import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export default CartSlice.reducer;

export const { addtocart } = CartSlice.actions;
