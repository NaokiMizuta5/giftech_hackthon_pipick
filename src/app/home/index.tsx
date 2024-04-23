import { Header } from "@/features/header";
import { PlacesList } from "@/features/placesList/components/PlacesList";
import { Box } from "@gluestack-ui/themed";

// export default function Home() {
//   const { currentCharacter } = useCharactersInfoAtom();
//   return (
//     <FadeInOutView>
//       <Box display="flex" flexDirection="column" alignItems="center">
//         <Header />
//         {currentCharacter && <Gauge character={currentCharacter} />}
//       </Box>
//     </FadeInOutView>
//   );
// }

export default function Home() {
  return (
    <Box>
      <Header />
      <PlacesList />
    </Box>
  );
}
