import { ThemeProvider } from "react-native-magnus";
import { ElevatorSystemProvider } from "./src/context/ElevatorSystemContext";
import { CurrentFloorProvider } from "./src/context/CurrentFloorContext";
import { ElevatorSystem } from "./src/components/ElevatorSystem";

export default function App() {
  return (
    <ElevatorSystemProvider>
      <CurrentFloorProvider>
        <ThemeProvider>
          <ElevatorSystem />
        </ThemeProvider>
      </CurrentFloorProvider>
    </ElevatorSystemProvider>
  );
}
