import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, reset } from "./counterSlice";

export default function CounterView() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleByValue = () => {
    dispatch(incrementByValue(5));
  };
  return (
    <>
      <h2>COUNTER</h2>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleByValue}>Add 5</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
