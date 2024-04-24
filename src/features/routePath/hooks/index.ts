import { useState } from "react";

export const useRoutePath = () => {
  const [state, setState] = useState();

  return {
    state,
    setState,
  };
};
