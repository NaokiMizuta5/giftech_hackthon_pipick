import { useCharactersInfoAtom } from "@/features/character";
import { FadeInOutView } from "@/features/fadeInOutView";
import { Gauge } from "@/features/gauge";
import { Header } from "@/features/header";
import { Box } from "@gluestack-ui/themed";

export default function Home() {
  const { currentCharacter } = useCharactersInfoAtom();
  return (
    <FadeInOutView>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Header />
        {currentCharacter && <Gauge character={currentCharacter} />}
      </Box>
    </FadeInOutView>
  );
}
