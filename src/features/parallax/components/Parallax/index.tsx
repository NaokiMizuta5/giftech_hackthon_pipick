import { PAGE_WIDTH } from "@/constants";
import { Box } from "@gluestack-ui/themed";
import { type ComponentProps, useEffect, useRef, useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { useColorThemeAtom } from "~/src/atom";
import {
  type CharacterId,
  useCharactersInfoAtom,
} from "~/src/features/character";
import { useHeaderAtom } from "~/src/features/header";
import { useParallaxAtom } from "../../atom";
import { SBItem } from "../SBItem";

type CarouselProps = ComponentProps<typeof Carousel>;

export function Parallax() {
  const progressValue = useSharedValue<number>(0);

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH - 20,
    height: PAGE_WIDTH * 1.2,
  } as CarouselProps;

  const { currentIndex, setCurrentIndex } = useParallaxAtom();
  const { menuItems, activateMenu } = useHeaderAtom();
  const { getCharacterIdByEnCharacterName, setCurrentCharacterId } =
    useCharactersInfoAtom();
  const { setSelectedColorTheme } = useColorThemeAtom();

  const carouselRef = useRef<any>(null);
  const [_currentIndex, _setCurrentIndex] = useState(0);

  const changeCharacter = (characterId: CharacterId | undefined) => {
    if (characterId) setCurrentCharacterId(characterId);
    setSelectedColorTheme(menuItems[currentIndex].color);
    activateMenu(`${currentIndex + 1}`);
  };

  useEffect(() => {
    if (Number.isInteger(_currentIndex)) {
      setCurrentIndex(_currentIndex);
    }
  }, [_currentIndex]);

  useEffect(() => {
    if (!menuItems[currentIndex]) return;
    switch (menuItems[currentIndex].enCharacterName) {
      case "Meika": {
        const characterId = getCharacterIdByEnCharacterName("Meika");
        changeCharacter(characterId);
        break;
      }
      case "Abbie": {
        const characterId = getCharacterIdByEnCharacterName("Abbie");
        changeCharacter(characterId);
        break;
      }
      case "Coo": {
        const characterId = getCharacterIdByEnCharacterName("Coo");
        changeCharacter(characterId);
        break;
      }
      default:
        break;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (carouselRef.current) {
      const targetMenuItem = menuItems.find((item) => item.active);
      if (targetMenuItem) {
        const targetIndex = menuItems.indexOf(targetMenuItem);
        carouselRef.current.scrollTo({ index: targetIndex, animated: true });
      }
    }
  }, [menuItems]);

  return (
    <Box alignItems="center">
      <Carousel
        ref={carouselRef}
        {...baseOptions}
        style={{ width: PAGE_WIDTH - 20 }}
        loop={true}
        pagingEnabled={true}
        autoPlay={false}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) => {
          progressValue.value = absoluteProgress;
          _setCurrentIndex(absoluteProgress);
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.88,
          parallaxScrollingOffset: 50,
        }}
        data={menuItems}
        renderItem={({ index }) => {
          if (menuItems[index].enCharacterName === "Meika")
            return (
              <SBItem
                index={index}
                img={require("~/assets/images/Meika.png")}
              />
            );
          if (menuItems[index].enCharacterName === "Abbie")
            return (
              <SBItem
                index={index}
                img={require("~/assets/images/Abbie.png")}
              />
            );
          if (menuItems[index].enCharacterName === "Coo")
            return (
              <SBItem index={index} img={require("~/assets/images/Coo.png")} />
            );
          return <SBItem index={index} />;
        }}
      />
    </Box>
  );
}
