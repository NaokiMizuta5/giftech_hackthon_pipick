import { useState } from "react";

export const usePlaceInfo = () => {
  const [state, setState] = useState();

  return {
    state,
    setState,
  };
};
