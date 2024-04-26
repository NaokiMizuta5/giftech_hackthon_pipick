import { useCharactersInfoAtom } from "@/features/character";
import { FadeInOutView } from "@/features/fadeInOutView";
import { FindButton } from "@/features/findButton";
import { Gauge } from "@/features/gauge";
import { Header } from "@/features/header";
import { ListButton } from "@/features/listButton";
import { Parallax } from "@/features/parallax";
import { Box, HStack } from "@gluestack-ui/themed";

export default function Home() {
  const { currentCharacter } = useCharactersInfoAtom();
  return (
    <FadeInOutView>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Header />
        {currentCharacter && (
          <Box marginTop={10}>
            <Gauge character={currentCharacter} />
          </Box>
        )}
        <Parallax />
        <HStack gap="$6" alignItems="center">
          <ListButton />
          <FindButton />
        </HStack>
      </Box>
    </FadeInOutView>
  );
}
