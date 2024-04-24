import {
  Box,
  CloseIcon,
  Heading,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
} from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed/build/components/Badge/styled-components";
import * as React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { TinderCard } from "rn-tinder-card";

const data = [
  "https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
  "https://images.unsplash.com/photo-1681871197336-0250ed2fe23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  "https://images.unsplash.com/photo-1681238091934-10fbb34b497a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1282&q=80",
  "https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
  "https://images.unsplash.com/photo-1681871197336-0250ed2fe23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  "https://images.unsplash.com/photo-1681238091934-10fbb34b497a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1282&q=80",
  "https://images.unsplash.com/photo-1681896616404-6568bf13b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
  "https://images.unsplash.com/photo-1681871197336-0250ed2fe23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  "https://images.unsplash.com/photo-1681238091934-10fbb34b497a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1282&q=80",
];

export function Swiper() {
  const OverlayRight = () => {
    return (
      <Box
        width="$full"
        height="$full"
        borderRadius="$xl"
        justifyContent="center"
        alignItems="center"
        backgroundColor="$green"
      >
        <Text color="$white" fontWeight="$bold" fontSize="$xl">
          Like
        </Text>
      </Box>
    );
  };
  const OverlayLeft = () => {
    return (
      <Box
        width="$full"
        height="$full"
        borderRadius="$xl"
        justifyContent="center"
        alignItems="center"
        backgroundColor="$red"
      >
        <Text color="$white" fontWeight="$bold" fontSize="$xl">
          Nope
        </Text>
      </Box>
    );
  };

  const [visible, setVisible] = React.useState(false);

  const handlePress = () => {
    setVisible(true);
  };

  return (
    <Box flex={1}>
      {data.map((item, index) => {
        return (
          <Pressable onPress={handlePress} key={`${index}-${item}`}>
            <Box pointerEvents="box-none">
              <TinderCard
                cardWidth={320}
                cardHeight={500}
                OverlayLabelRight={OverlayRight}
                OverlayLabelLeft={OverlayLeft}
                cardStyle={styles.card}
                onSwipedRight={() => {}}
                onSwipedLeft={() => {}}
              >
                <Image
                  alt="swiper"
                  source={{ uri: item }}
                  style={styles.image}
                />
              </TinderCard>
            </Box>
          </Pressable>
        );
      })}
      <Modal isOpen={visible} onClose={() => setVisible(false)}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">header</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar, nisl nec vestibulum commodo, mauris nisl efficitur
              libero, id ultricies mi nisl nec purus. Nullam sit amet
              sollicitudin libero, sit amet ultricies elit. Nullam euismod
              tincidunt orci, ut vehicula libero. Nullam sit amet sollicitudin
              libero, sit amet ultricies elit. Nullam euismod tincidunt orci, ut
              vehicula libero.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  cardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: 48,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 48,
  },
  overlayLabelContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayLabelText: { color: "white", fontSize: 32, fontWeight: "bold" },
});
