import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApiData = createAsyncThunk("data/fetchApiData", async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
  ); // Replace with your API endpoint
  const data = await response.json();
  return data;
});

const DataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApiData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default DataSlice.reducer;
