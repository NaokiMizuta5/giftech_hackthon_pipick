import { useCharactersInfoAtom } from "@/features/character";
import { FadeInOutView } from "@/features/fadeInOutView";
import { Gauge } from "@/features/gauge";
import { Header } from "@/features/header";
import { useHeaderAtom } from "@/features/header";
import { PlacesList } from "@/features/placesList";
import { Box } from "@gluestack-ui/themed";
import { useSuggestAtom } from "~/src/atom/suggest/atom";

export default function ListPage() {
  const { currentMenu, selectedListMenu } = useHeaderAtom();
  const { currentCharacter } = useCharactersInfoAtom();
  const {
    suggestData,
    // addSuggestData,
    // removeSuggestData,
    favoriteData,
    // addFavoriteData,
    // removeFavoriteData,
    doneData,
    // addDoneData,
    // removeDoneData,
  } = useSuggestAtom(currentMenu.menuName);

  return (
    <FadeInOutView>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Header />
        {currentCharacter && (
          <Box marginTop="$8" marginBottom="$4">
            <Gauge character={currentCharacter} withAvatar={true} />
          </Box>
        )}
        {currentCharacter && selectedListMenu && (
          <PlacesList
            character={currentCharacter}
            suggestData={suggestData}
            favoriteData={favoriteData}
            doneData={doneData}
            selectedListMenu={selectedListMenu}
          />
        )}
      </Box>
    </FadeInOutView>
  );
}
