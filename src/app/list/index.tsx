// import { PlacesList } from "@/features/placesList";
import { FadeInOutView } from "@/features/fadeInOutView";
import { Header } from "@/features/header";
import { Box, Text } from "@gluestack-ui/themed";

export default function ListPage() {
  return (
    <FadeInOutView>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Header />
        <Text>List Page</Text>
        {/* <PlacesList /> */}
      </Box>
    </FadeInOutView>
  );
}
