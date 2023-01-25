import { forwardRef, useContext } from "react";
import { Div } from "react-native-magnus";
import BottomSheet from "reanimated-bottom-sheet";
import { FloorBottomSheetHeader } from "./FloorBottomSheetHeader";
import { FloorButtons } from "./FloorButtons";
import { CurrentFloorContext } from "../context/CurrentFloorContext";

interface FloorBottomSheetProps {
  onClose: () => void;
}

export const FloorBottomSheet = forwardRef<BottomSheet, FloorBottomSheetProps>(
  ({ onClose }, ref) => {
    const { currentFloor, setCurrentFloor } = useContext(CurrentFloorContext);

    const renderContent = () => {
      return (
        <Div
          bg="#202027"
          flexWrap="wrap"
          justifyContent="center"
          flexDir="row"
          h={200}
          px={20}
          pt={15}
        >
          <FloorButtons
            onFloorPress={setCurrentFloor}
            pressedFloors={[currentFloor]}
          />
        </Div>
      );
    };

    return (
      <BottomSheet
        ref={ref}
        snapPoints={[0, 200]}
        renderContent={renderContent}
        renderHeader={() => <FloorBottomSheetHeader onClose={onClose} />}
        initialSnap={0}
        enabledContentTapInteraction={false}
        enabledContentGestureInteraction={false}
      />
    );
  }
);
