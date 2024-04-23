import { useState } from "react";

export const usePlacesList = () => {
  const [state, setState] = useState();

  return {
    state,
    setState,
  };
};
