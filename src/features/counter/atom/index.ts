import { atom, useAtom, useAtomValue } from "jotai";
import { INITIAL_COUNT_ATOM } from "../constants";

const countAtom = atom(INITIAL_COUNT_ATOM);

const doubleCounterAtom = atom((get) => {
  return get(countAtom) * 2;
});

export const useCounterAtom = () => {
  const [count, setCount] = useAtom(countAtom);
  const doubleCount = useAtomValue(doubleCounterAtom);

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
