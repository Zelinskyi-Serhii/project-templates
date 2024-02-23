import "./App.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import * as countSlice from "@/redux/features/count/countSlice";

export const App = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.count);

  return (
    <div>
      <button onClick={() => dispatch(countSlice.increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(countSlice.decrement())}>Decrement</button>
    </div>
  );
};
