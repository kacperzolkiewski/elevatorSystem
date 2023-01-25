import { Direction, ElevatorCandidate, PickUpRequest } from "../types/elevator";
import { Elevator } from "./Elevator";
import { inRange, remove } from "lodash";

export class ElevatorSystem {
  private _pickupRequests: PickUpRequest[] = [];
  public _elevators: Elevator[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this._elevators.push(new Elevator(i, 0));
    }
  }

  private findBestCandidates = (
    targetFloor: number,
    pickupDirection: Direction
  ) => {
    const bestElevators: ElevatorCandidate[] = [];

    this._elevators.forEach((elevator) => {
      if (
        elevator.isIdle ||
        (inRange(targetFloor, elevator.currentFloor, elevator.nextStop) &&
          elevator.status.state === pickupDirection)
      ) {
        const distance = elevator.countDistance(targetFloor);
        bestElevators.push({ elevator, distance });
      }
    });

    return bestElevators;
  };

  private findBestElevator(pickupRequest: PickUpRequest) {
    const { floor: targetFloor, direction } = pickupRequest;
    const bestCandidates = this.findBestCandidates(targetFloor, direction);

    if (bestCandidates.length === 0) {
      return false;
    }

    bestCandidates.sort((a, b) => a.distance - b.distance);
    const chosenCandidate = bestCandidates[0];

    chosenCandidate?.elevator.addPriorityStop(
      targetFloor,
      chosenCandidate.distance
    );

    return true;
  }

  pickup(floor: number, direction: Direction) {
    const pickupRequest: PickUpRequest = {
      floor,
      direction,
    };

    if (!this.findBestElevator(pickupRequest))
      this._pickupRequests.push(pickupRequest);
  }

  dropoff(elevatorID: number, targetFloor: number) {
    this._elevators
      .find((elevator) => elevator.id === elevatorID)
      ?.addStop(targetFloor);
  }

  step() {
    this._elevators.forEach((elevator) => elevator.step());
    remove(this._pickupRequests, (request) => this.findBestElevator(request));
  }

  status() {
    return this._elevators.map((elevator) => elevator.status);
  }
}
