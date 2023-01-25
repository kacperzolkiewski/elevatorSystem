import { useRef } from "react";
import Animated from "react-native-reanimated";
import { Dimensions } from "react-native";
import { Elevator } from "./Elevator";
import { useElevatorSystem } from "../hooks/useElevatorSystem";

const { width, height } = Dimensions.get("window");

export const ElevatorsContainer = () => {
  const { elevatorsStatus } = useElevatorSystem();
  const scroll = useRef<Animated.ScrollView>(null);

  return (
    <Animated.View
      style={{
        height: 0.8 * height,
      }}
    >
      <Animated.ScrollView
        ref={scroll}
        horizontal
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        {elevatorsStatus.map((elevatorStatus) => (
          <Elevator key={elevatorStatus.id} elevatorStatus={elevatorStatus} />
        ))}
      </Animated.ScrollView>
    </Animated.View>
  );
};
