import { useContext } from "react";
import { Dimensions } from "react-native";
import { Button, Div } from "react-native-magnus";
import { ElevatorDoors } from "./ElevatorDoors";
import { ElevatorHeader } from "./ElevatorHeader";
import { ElevatorStatus, ElevatorState } from "../types/elevator";
import { FloorButtons } from "./FloorButtons";
import { CurrentFloorContext } from "../context/CurrentFloorContext";
import { useElevatorSystem } from "../hooks/useElevatorSystem";

interface ElevatorProps {
  elevatorStatus: ElevatorStatus;
}

const { width } = Dimensions.get("window");

export const Elevator = ({ elevatorStatus }: ElevatorProps) => {
  const {
    id,
    state,
    stops,
    currentFloor: curentElevatorFloor,
  } = elevatorStatus;
  const { currentFloor } = useContext(CurrentFloorContext);
  const { pickup, dropoff } = useElevatorSystem();

  return (
    <Div w={width} px={20} justifyContent="center">
      <Div shadow="md" w="100%" h="80%" alignItems="center" bg="#EBECEE">
        <ElevatorHeader
          index={id}
          elevatorState={state}
          currentFloor={curentElevatorFloor}
        />
        <Div h="82%" w="100%" flexDir="row">
          <Div w="15%" borderRightWidth={1} borderRightColor="gray"></Div>
          <Div
            w="70%"
            h="100%"
            flexWrap="wrap"
            flexDir="row"
            alignItems="center"
            justifyContent="center"
          >
            <FloorButtons
              onFloorPress={(floor) => dropoff(id, floor)}
              pressedFloors={stops}
            />
            <ElevatorDoors isOpen={curentElevatorFloor === currentFloor} />
          </Div>
          <Div
            px={10}
            w="15%"
            justifyContent="center"
            alignItems="center"
            borderLeftColor="gray"
            borderLeftWidth={1}
          >
            <Button
              fontWeight="bold"
              fontSize={20}
              mb={5}
              onPress={() => pickup(currentFloor, ElevatorState.UP)}
            >
              ↑
            </Button>
            <Button
              fontWeight="bold"
              fontSize={20}
              onPress={() => pickup(currentFloor, ElevatorState.DOWN)}
            >
              ↓
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
