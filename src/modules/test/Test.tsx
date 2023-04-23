import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Test.action";
import { RootState } from "../../utils/Storetype";

const Test = () => {
  const count = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Test;
