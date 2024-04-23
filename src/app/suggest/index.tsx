import { FadeInOutView } from "@/features/fadeInOutView";
import { Header } from "@/features/header";
import { Box } from "@gluestack-ui/themed";
import { useColorThemeAtom } from "~/src/atom";
import { useCharactersInfoAtom } from "~/src/features/character";
import { Swiper } from "~/src/features/swiper";
import { getThemeOneColor } from "~/src/utils";

export default function Suggest() {
  const { colorTheme } = useColorThemeAtom();
  const _color = getThemeOneColor(colorTheme);
  const { currentCharacter } = useCharactersInfoAtom();

  return (
    <FadeInOutView>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Header />
        <Box padding="$4" />
        {/* <HStack marginVertical="$4" alignItems="center" gap="$4"> */}
        {/*   <Avatar bgColor={color} size="lg" borderRadius="$full"> */}
        {/*     <AvatarFallbackText>{currentCharacter?.enName}</AvatarFallbackText> */}
        {/*     <AvatarImage */}
        {/*       alt="character" */}
        {/*       source={{ uri: require("~/assets/images/chibi-chara.png") }} */}
        {/*     /> */}
        {/*   </Avatar> */}
        {/*   <Box */}
        {/*     backgroundColor="$coolGray700" */}
        {/*     height="$full" */}
        {/*     width="$64" */}
        {/*     borderRadius="$xl" */}
        {/*     padding="$4" */}
        {/*   > */}
        {/*     <Text color="$white">test text</Text> */}
        {/*   </Box> */}
        {/* </HStack> */}
        <Swiper />
      </Box>
    </FadeInOutView>
  );
}
