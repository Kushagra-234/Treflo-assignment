import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  size: "",
  toppings: "",
  sort: "",
  rating: "",
};

const initial_qty = 0;

// console.log(arrval);

const CartSlice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const arr = state.cart.map((object) => ({
        ...object,
        quantity: 1,
      }));

      const substance = arr.find((item) => item.id === action.payload.id);
      if (substance) {
      } else {
        state.cart.push(action.payload);
      }

      state.totalQuantity += 1;
    },

    increasetotalcount: (state, action) => {
      state.totalQuantity += 1;
    },

    decreasetotalcount: (state, action) => {
      state.totalQuantity -= 1;
    },

    addsize: (state, action) => {
      state.size = action.payload;
    },
    addtoppings: (state, action) => {
      state.toppings = action.payload;
    },
    sort: (state, action) => {
      state.sort = action.payload;
    },
    rating: (state, action) => {
      state.rating = action.payload;
    },
  },
});

export default CartSlice.reducer;

export const { addtocart } = CartSlice.actions;

export const {
  updateSubstances,
  increasetotalcount,
  decreasetotalcount,
  addsize,
  addtoppings,
  sort,
  rating,
} = CartSlice.actions;
