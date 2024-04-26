import { FadeInOutView } from "@/features/fadeInOutView";
import { Header } from "@/features/header";
import { useHeaderAtom } from "@/features/header";
import { Box } from "@gluestack-ui/themed";
import { useSuggestAtom } from "~/src/atom/suggest/atom";
import { Swiper } from "~/src/features/swiper";

export default function Suggest() {
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
