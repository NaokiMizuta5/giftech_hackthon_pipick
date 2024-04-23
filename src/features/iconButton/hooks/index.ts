import { useState } from "react";

export const useIconButton = () => {
  const [state, setState] = useState();

  return {
    state,
    setState,
  };
};
