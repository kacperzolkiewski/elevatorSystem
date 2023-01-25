import { useRef } from "react";
import { Button, Div, Text } from "react-native-magnus";
import { ElevatorsContainer } from "./ElevatorsContainer";
import { FloorBottomSheet } from "./FloorBottomSheet";
import BottomSheet from "reanimated-bottom-sheet";

export const ElevatorSystem = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <Div flex={1}>
      <Text mt={50} fontWeight="bold" fontSize={30} textAlign="center">
        Elevator System
      </Text>
      <ElevatorsContainer />
      <Button
        w="90%"
        position="absolute"
        bottom={20}
        right={20}
        onPress={() => bottomSheetRef.current?.snapTo(1)}
      >
        Current Floor
      </Button>
      <FloorBottomSheet
        onClose={() => bottomSheetRef.current?.snapTo(0)}
        ref={bottomSheetRef}
      />
    </Div>
  );
};
