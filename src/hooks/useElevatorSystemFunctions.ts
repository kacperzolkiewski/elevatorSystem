import { useCallback, useMemo, useState } from "react";
import { ElevatorSystem } from "../services/ElevatorSystem";
import { Direction } from "../types/elevator";

export const useElevatorSystemFunctions = () => {
  const elevatorSystem = useMemo(() => new ElevatorSystem(), []);
  const [elevatorsStatus, setElevatorsStatus] = useState([
    ...elevatorSystem.status(),
  ]);

  const update = useCallback(
    () => setElevatorsStatus([...elevatorSystem.status()]),
    [elevatorSystem]
  );

  const step = useCallback(() => {
    elevatorSystem.step();
    update();
  }, [elevatorSystem, update]);

  const pickup = useCallback(
    (sourceFloor: number, direction: Direction) => {
      elevatorSystem.pickup(sourceFloor, direction);
      update();
    },
    [elevatorSystem, update]
  );

  const dropoff = useCallback(
    (elevatorID: number, targetFloor: number) => {
      elevatorSystem.dropoff(elevatorID, targetFloor);
      update();
    },
    [elevatorSystem, update]
  );

  return {
    elevatorsStatus,
    pickup,
    dropoff,
    step,
  };
};
