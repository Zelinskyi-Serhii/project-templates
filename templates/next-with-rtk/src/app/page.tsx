'use client';

import * as countSlice from '@/redux/features/count/countSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function Home() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.count);

  return (
    <main>
      <button onClick={() => dispatch(countSlice.increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(countSlice.decrement())}>Decrement</button>
    </main>
  );
}
