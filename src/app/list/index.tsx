import { FadeInOutView } from "@/features/fadeInOutView";
import { Header } from "@/features/header";
import { PlacesList } from "@/features/placesList";
import { Box } from "@gluestack-ui/themed";

export default function ListPage() {
  return (
    <FadeInOutView>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Header />
        <PlacesList />
      </Box>
    </FadeInOutView>
  );
}
