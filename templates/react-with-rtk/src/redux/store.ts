import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import countReducer from "@/redux/features/count/countSlice";

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
