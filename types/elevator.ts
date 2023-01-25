import { Elevator } from "../services/Elevator";

export enum ElevatorState {
  UP = "UP",
  DOWN = "DOWN",
  IDLE = "IDLE",
}

export type Direction = Exclude<ElevatorState, ElevatorState.IDLE>;

export interface ElevatorStatus {
  id: number;
  currentFloor: number;
  state: ElevatorState;
  stops: number[];
}

export interface PickUpRequest {
  floor: number;
  direction: Direction;
}

export interface ElevatorCandidate {
  elevator: Elevator;
  distance: number;
}
