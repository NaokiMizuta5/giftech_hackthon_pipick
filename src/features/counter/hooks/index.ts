import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const doubleCount = count * 2;

  const incrementCount = () => {
    return setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    return setCount((prev) => prev - 1);
  };

  return {
    count,
    incrementCount,
    decrementCount,
    doubleCount,
  };
};
