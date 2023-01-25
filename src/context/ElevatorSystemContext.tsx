import { ReactNode, createContext, useEffect, useMemo } from "react";
import { Direction, ElevatorStatus } from "../types/elevator";
import { useElevatorSystemFunctions } from "../hooks/useElevatorSystemFunctions";

export interface ElevatorSystemContextType {
  elevatorsStatus: ElevatorStatus[];
  pickup: (sourceFloor: number, direction: Direction) => void;
  dropoff: (elevatorID: number, targetFloor: number) => void;
  step: () => void;
}

export const ElevatorSystemContext =
  createContext<ElevatorSystemContextType | null>(null);

export const ElevatorSystemProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { elevatorsStatus, pickup, dropoff, step } =
    useElevatorSystemFunctions();

  useEffect(() => {
    const intervalId = setInterval(step, 3000);

    return () => clearInterval(intervalId);
  }, [step]);

  const value = useMemo(
    () => ({
      elevatorsStatus,
      pickup,
      dropoff,
      step,
    }),
    [elevatorsStatus, dropoff, pickup, step]
  );

  return (
    <ElevatorSystemContext.Provider value={value}>
      {children}
    </ElevatorSystemContext.Provider>
  );
};
