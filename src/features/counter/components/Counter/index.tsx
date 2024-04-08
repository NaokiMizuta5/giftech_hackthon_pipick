import {
  Box,
  Button,
  ButtonText,
  Center,
  HStack,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useCounterAtom } from "../../atom";
import { useCounter } from "../../hooks";

export function Counter() {
  const { count, doubleCount, incrementCount, decrementCount } = useCounter();
  const {
    count: atomCount,
    doubleCount: atomDoubleCount,
    incrementCount: atomIncrementCount,
    decrementCount: atomDecrementCount,
  } = useCounterAtom();

  return (
    <Center>
      <VStack gap="$8">
        <Text textAlign="center">Local State Counter</Text>

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

        <Text textAlign="center">Global State Counter</Text>

        <Box>
          <Text textAlign="center">count: {atomCount}</Text>
          <Text textAlign="center">double: {atomDoubleCount}</Text>
        </Box>

        <HStack columnGap="$6">
          <Button onPress={atomDecrementCount}>
            <ButtonText>count--</ButtonText>
          </Button>

          <Button onPress={atomIncrementCount}>
            <ButtonText>count++</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
}
