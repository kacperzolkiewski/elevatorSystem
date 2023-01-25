import { ThemeProvider } from "react-native-magnus";
import { ElevatorSystemProvider } from "./context/ElevatorSystemContext";
import { CurrentFloorProvider } from "./context/CurrentFloorContext";
import { ElevatorSystem } from "./components/ElevatorSystem";

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
