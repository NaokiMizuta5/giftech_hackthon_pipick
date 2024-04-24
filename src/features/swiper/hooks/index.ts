import { useState } from "react";

export const useSwiper = () => {
  const [state, setState] = useState();

  return {
    state,
    setState,
  };
};
