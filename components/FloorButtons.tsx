import { useMemo } from "react";
import { Button, Text } from "react-native-magnus";

const FLOOR_COUNT = 9;

interface FloorButtonsProps {
  onFloorPress: (floor: number) => void;
  pressedFloors: number[];
}

export const FloorButtons = ({
  onFloorPress,
  pressedFloors,
}: FloorButtonsProps) => {
  const floorButtons = useMemo(() => {
    const buttons: JSX.Element[] = [];

    for (let floor = 0; floor <= FLOOR_COUNT; floor++) {
      buttons.push(
        <Button
          key={floor}
          borderWidth={1}
          bg={pressedFloors.includes(floor) ? "red" : "white"}
          w={60}
          m={5}
          onPress={() => onFloorPress(floor)}
        >
          <Text fontWeight="bold">{floor}</Text>
        </Button>
      );
    }

    return buttons;
  }, [pressedFloors, onFloorPress]);

  return <>{floorButtons}</>;
};
