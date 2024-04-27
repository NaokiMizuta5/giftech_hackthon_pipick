import { FadeInOutView } from "@/features/fadeInOutView";
import { Header } from "@/features/header";
import { useHeaderAtom } from "@/features/header";
import { Box } from "@gluestack-ui/themed";
import { useEffect } from "react";
import { useSuggestAtom } from "~/src/atom/suggest/atom";
import { useCharactersInfoAtom } from "~/src/features/character";
import { Swiper } from "~/src/features/swiper";

export default function Suggest() {
  const { currentCharacter } = useCharactersInfoAtom();
  const { currentMenu } = useHeaderAtom();
  const {
    suggestData,
    addSuggestData,
    removeSuggestData,
    favoriteData,
    addFavoriteData,
    removeFavoriteData,
    doneData,
    addDoneData,
    removeDoneData,
  } = useSuggestAtom(currentMenu.menuName);

  useEffect(() => {}, []);

  return (
    <FadeInOutView>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Header />
        <Box padding="$4" />
        <Swiper />
      </Box>
    </FadeInOutView>
  );
}
