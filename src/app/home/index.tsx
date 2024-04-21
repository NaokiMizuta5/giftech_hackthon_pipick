import { FadeInOutView } from "@/features/fadeInOutView";
import { Header } from "@/features/header";
import { Box } from "@gluestack-ui/themed";

export default function Home() {
  return (
    <FadeInOutView>
      <Box>
        <Header />
      </Box>
    </FadeInOutView>
  );
}
