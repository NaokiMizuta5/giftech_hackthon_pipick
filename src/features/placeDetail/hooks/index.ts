import { useState } from "react";

export const usePlaceDetail = () => {
  const [state, setState] = useState();

  return {
    state,
    setState,
  };
};
