import { useState } from "react";

export const useSwipe = () => {
  const [state, setState] = useState();

  return {
    state,
    setState,
  };
};
