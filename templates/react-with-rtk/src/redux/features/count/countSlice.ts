import { createSlice } from "@reduxjs/toolkit";

interface CountState {
  count: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: CountState = {
  count: 0,
  isLoading: false,
  error: null,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

export const { increment, decrement } = countSlice.actions
export default countSlice.reducer;
