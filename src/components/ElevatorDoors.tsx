import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const ElevatorDoors = ({ isOpen }: { isOpen: boolean }) => {
  const animation = useSharedValue({ width: "0%" });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: withTiming(animation.value.width, {
        duration: 1000,
      }),
    };
  });

  animation.value = { width: isOpen ? "0%" : "50%" };

  return (
    <>
      <Animated.View style={[styles.door, { left: 0 }, animatedStyles]} />
      <Animated.View style={[styles.door, { right: 0 }, animatedStyles]} />
    </>
  );
};

const styles = StyleSheet.create({
  door: {
    height: "100%",
    position: "absolute",
    backgroundColor: "gray",
  },
});
