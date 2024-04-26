import { PAGE_HEIGHT, PAGE_WIDTH } from "@/constants";
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
import { SBItem } from "../SBItem";

type CarouselProps = ComponentProps<typeof Carousel>;

export function Parallax() {
  const progressValue = useSharedValue<number>(0);

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH - 20,
    height: PAGE_HEIGHT * 0.66,
  } as CarouselProps;

  const { menuItems, activateMenu } = useHeaderAtom();
  const { setCurrentCharacterId } = useCharactersInfoAtom();
  const { setSelectedColorTheme } = useColorThemeAtom();

  const carouselRef = useRef<any>(null);
  const [_currentIndex, _setCurrentIndex] = useState(0);

  const handleOnScrollEnd = (index: number) => {
    setSelectedColorTheme(menuItems[index].color);
    setCurrentCharacterId(`${index + 1}` as CharacterId);
    activateMenu(`${index + 1}`);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const targetMenuItem = menuItems.find((item) => item.active);
      if (targetMenuItem) {
        const targetIndex = menuItems.indexOf(targetMenuItem);
        carouselRef.current.scrollTo({ index: targetIndex });
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
        onScrollEnd={handleOnScrollEnd}
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
