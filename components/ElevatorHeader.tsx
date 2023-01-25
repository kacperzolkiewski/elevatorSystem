import { Div, Text } from "react-native-magnus";
import { ElevatorState } from "../types/elevator";

const getElevatorSign = (elevatorState: ElevatorState) => {
  switch (elevatorState) {
    case ElevatorState.UP:
      return "↑";
    case ElevatorState.DOWN:
      return "↓";
    default:
      return "-";
  }
};

export const ElevatorHeader = ({
  index,
  elevatorState,
  currentFloor,
}: {
  index: number;
  elevatorState: ElevatorState;
  currentFloor: number;
}) => {
  const elevatorSign = getElevatorSign(elevatorState);

  return (
    <Div
      w="100%"
      h="18%"
      flexDir="row"
      p={20}
      borderBottomWidth={1}
      borderColor="gray"
      justifyContent="space-between"
    >
      <Div
        w={80}
        h={50}
        borderWidth={1}
        borderColor="gray"
        justifyContent="center"
        alignItems="center"
        rounded={10}
      >
        <Text color="black" fontWeight="bold" textAlign="center">{`Elevator \n${
          index + 1
        }`}</Text>
      </Div>
      <Div
        w={80}
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        rounded={10}
        h={50}
        px={10}
        bg="black"
      >
        <Text color="orange" fontSize={30}>
          {elevatorSign}
        </Text>
        <Text color="orange" fontSize={30}>
          {currentFloor}
        </Text>
      </Div>
    </Div>
  );
};
