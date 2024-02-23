import styles from "./Count.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import * as countSlice from "@/redux/features/count/countSlice";

export const Count = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.count);

  return (
    <div className={styles.count}>
      <button onClick={() => dispatch(countSlice.increment())}>Increment</button>
        <span>{count}</span>
      <button onClick={() => dispatch(countSlice.decrement())}>Decrement</button>
    </div>
  );
};
