import { LinearGradient } from "@/components";
import {
  Box,
  Button,
  ChevronLeftIcon,
  HStack,
  Icon,
  MenuIcon,
  SafeAreaView,
  Text,
} from "@gluestack-ui/themed";

import { useHeaderAtom } from "../../atom";

export function Header() {
  const { menuItems, activateMenu } = useHeaderAtom();

  return (
    <Box bgColor="$black">
      <LinearGradient
        color="pink"
        height="$24"
        width="$full"
        borderBottomLeftRadius="$3xl"
        borderBottomRightRadius="$3xl"
      >
        <SafeAreaView>
          <Box
            display="flex"
            flexDirection="column-reverse"
            height="$full"
            paddingBottom="$4"
          >
            <HStack
              justifyContent="space-between"
              alignItems="center"
              paddingLeft="$4"
              paddingRight="$4"
            >
              <Icon as={ChevronLeftIcon} color="$white" size="xl" />
              <HStack gap="$2" alignItems="center">
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    onPress={() => activateMenu(item.id)}
                    paddingHorizontal="$4"
                    {...(item.active
                      ? {
                          backgroundColor: "$white",
                          borderRadius: "$3xl",
                        }
                      : {
                          backgroundColor: "transparent",
                        })}
                  >
                    <Text
                      color={item.active ? "$black " : "$white"}
                      fontSize="$sm"
                      fontWeight="$bold"
                    >
                      {item.label}
                    </Text>
                  </Button>
                ))}
              </HStack>
              <Icon as={MenuIcon} color="$white" size="xl" />
            </HStack>
          </Box>
        </SafeAreaView>
      </LinearGradient>
    </Box>
  );
}
