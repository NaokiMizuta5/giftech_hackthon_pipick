import { useState } from "react";

export const useGauge = () => {
  const [state, setState] = useState();

  return {
    state,
    setState,
  };
};
