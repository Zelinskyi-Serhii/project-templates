import { createSlice } from '@reduxjs/toolkit';

interface CountState {
  count: number;
  isLoading: boolean;
  error: boolean | null;
}

const initialState: CountState = {
  count: 0,
  isLoading: false,
  error: null,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
