import { atom } from "jotai";
import { INITIAL_COUNT_ATOM } from "../constants";

export const countAtom = atom(INITIAL_COUNT_ATOM);

export const doubleCounterAtom = atom((get) => {
  return get(countAtom) * 2;
});
