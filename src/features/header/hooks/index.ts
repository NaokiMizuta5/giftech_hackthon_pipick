import { useState } from "react";

export const useHeader = () => {
  const [state, setState] = useState();

  return {
    state,
    setState,
  };
};
