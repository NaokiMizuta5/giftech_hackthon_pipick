import { useState } from "react";

export const useCharacter = () => {
  const [state, setState] = useState();

  return {
    state,
    setState,
  };
};
