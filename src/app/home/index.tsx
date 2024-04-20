import { Header } from "@/features/header";
import { Swipe } from "@/features/swipe";
import { Box } from "@gluestack-ui/themed";

export default function Home() {
  return (
    <Box>
      <Header />
      <Swipe />
    </Box>
  );
}
