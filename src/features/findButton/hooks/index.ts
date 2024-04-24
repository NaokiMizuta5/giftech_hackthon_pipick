import { router } from "expo-router";

export const useFindButton = () => {
  const handlePress = () => {
    router.push("/suggest/");
  };

  return {
    handlePress,
  };
};
