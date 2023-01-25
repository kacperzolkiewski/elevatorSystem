import { Div, Text } from "react-native-magnus";

import { Pressable } from "react-native";

export const FloorBottomSheetHeader = ({
  onClose,
}: {
  onClose: () => void;
}) => (
  <Div
    bg="#202027"
    top={1}
    h={50}
    roundedTopLeft={41}
    roundedTopRight={41}
    alignItems="center"
    justifyContent="center"
  >
    <Div h={5} w={60} bg="white" rounded={20}></Div>
    <Pressable
      onPress={onClose}
      style={{
        position: "absolute",
        right: 20,
        top: 20,
      }}
    >
      <Div
        w={30}
        h={30}
        borderWidth={1}
        borderColor="white"
        rounded={50}
        alignItems="center"
        justifyContent="center"
      >
        <Text color="white" fontWeight="bold">
          X
        </Text>
      </Div>
    </Pressable>
  </Div>
);
