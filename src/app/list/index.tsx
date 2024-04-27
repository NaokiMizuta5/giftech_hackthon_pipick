import { useCharactersInfoAtom } from "@/features/character";
import { FadeInOutView } from "@/features/fadeInOutView";
import { Gauge } from "@/features/gauge";
import { Header } from "@/features/header";
import { PlacesList } from "@/features/placesList";
import { Box } from "@gluestack-ui/themed";

export default function ListPage() {
  const { currentCharacter } = useCharactersInfoAtom();

  return (
    <FadeInOutView>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Header />
        {currentCharacter && (
          <Box marginTop="$8" marginBottom="$4">
            <Gauge character={currentCharacter} withAvatar={true} />
          </Box>
        )}
        <PlacesList character={currentCharacter} />
      </Box>
    </FadeInOutView>
  );
}
