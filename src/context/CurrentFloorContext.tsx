import { ReactNode, createContext, useState } from "react";

export const CurrentFloorContext = createContext({
  currentFloor: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCurrentFloor: (_currentFloor: number) => {
    return;
  },
});

export const CurrentFloorProvider = ({ children }: { children: ReactNode }) => {
  const [currentFloor, setCurrentFloor] = useState(0);

  return (
    <CurrentFloorContext.Provider value={{ currentFloor, setCurrentFloor }}>
      {children}
    </CurrentFloorContext.Provider>
  );
};
