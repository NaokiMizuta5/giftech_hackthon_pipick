import { AnimatedView } from "@/features/animatedView";
import { Header } from "@/features/header";
import { Box } from "@gluestack-ui/themed";

export default function Home() {
  return (
    <AnimatedView>
      <Box>
        <Header />
      </Box>
    </AnimatedView>
  );
}
