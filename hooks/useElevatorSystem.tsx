import { useContext } from "react";
import { ElevatorSystemContext } from "../context/ElevatorSystemContext";

export const useElevatorSystem = () => {
  const context = useContext(ElevatorSystemContext);

  if (!context) {
    throw new Error("ElevatorSystemContext not initialised");
  }

  return context;
};
