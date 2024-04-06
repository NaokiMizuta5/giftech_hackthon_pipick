import { useAtom, useAtomValue } from "jotai";
import { countAtom, doubleCounterAtom } from "../atom";

export const useCounter = () => {
  const [count, setCount] = useAtom(countAtom);

  const incrementCount = () => {
    return setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    return setCount((prev) => prev - 1);
  };

  const doubleCount = useAtomValue(doubleCounterAtom);

  return {
    count,
    incrementCount,
    decrementCount,
    doubleCount,
  };
};
