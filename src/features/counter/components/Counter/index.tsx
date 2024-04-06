import {
  Box,
  Button,
  ButtonText,
  Center,
  HStack,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useCounter } from "../../hooks";

export function Counter() {
  const { count, doubleCount, incrementCount, decrementCount } = useCounter();

  return (
    <Center height="$full" width="$full">
      <VStack gap="$8">
        <Text textAlign="center">Counter</Text>

        <Box>
          <Text textAlign="center">count: {count}</Text>
          <Text textAlign="center">double: {doubleCount}</Text>
        </Box>

        <HStack columnGap="$6">
          <Button onPress={decrementCount}>
            <ButtonText>count--</ButtonText>
          </Button>

          <Button onPress={incrementCount}>
            <ButtonText>count++</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
}
