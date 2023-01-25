import { ElevatorStatus, ElevatorState } from "../types/elevator";

export class Elevator {
  private _currentDirectionStops: number[] = [];
  private _oppositeDirectionStops: number[] = [];
  private _state = ElevatorState.IDLE;
  private _currentFloor: number;
  private _id: number;

  constructor(id: number, floor: number) {
    this._id = id;
    this._currentFloor = floor;
  }

  get id() {
    return this._id;
  }

  get currentFloor() {
    return this._currentFloor;
  }

  get nextStop() {
    return this._currentDirectionStops[0] ?? this._currentFloor;
  }

  get isIdle() {
    return this._state === ElevatorState.IDLE;
  }

  get status(): ElevatorStatus {
    return {
      id: this._id,
      currentFloor: this._currentFloor,
      state: this._state,
      stops: [...this._currentDirectionStops, ...this._oppositeDirectionStops],
    };
  }

  private setState(targetFloor: number) {
    this._state =
      this._currentFloor === targetFloor
        ? ElevatorState.IDLE
        : this._currentFloor > targetFloor
        ? ElevatorState.DOWN
        : ElevatorState.UP;
  }

  private move() {
    switch (this._state) {
      case ElevatorState.UP:
        this._currentFloor++;
        break;
      case ElevatorState.DOWN:
        this._currentFloor--;
        break;
      default:
        return;
    }
  }

  private getStopInsertionIndex(targetDistance: number, stops: number[]) {
    let index = 0;

    for (const stop of stops) {
      const stopDistance = this.countDistance(stop);

      if (
        (targetDistance > 0 && stopDistance <= targetDistance) ||
        (targetDistance < 0 && stopDistance >= targetDistance)
      )
        index++;
    }

    return index;
  }

  private changeStopsDirection() {
    const currentDirectionStopsCopy = [...this._currentDirectionStops];
    this._currentDirectionStops.splice(0, this._currentDirectionStops.length);

    this._oppositeDirectionStops.forEach((req) => {
      this._currentDirectionStops.push(req);
    });

    this._oppositeDirectionStops.splice(0, this._oppositeDirectionStops.length);

    currentDirectionStopsCopy.forEach((stop) => {
      this._oppositeDirectionStops.push(stop);
    });

    this.setState(this.nextStop);
  }

  step() {
    if (this.isIdle) return;
    this.move();

    if (this._currentFloor === this.nextStop) {
      this._currentDirectionStops.shift();
    }

    if (this._currentDirectionStops.length === 0) {
      if (this._oppositeDirectionStops.length === 0) {
        this._state = ElevatorState.IDLE;
        return;
      }

      this.changeStopsDirection();
    }
  }

  countDistance(targetFloor: number) {
    const distance = targetFloor - this._currentFloor;

    switch (this._state) {
      case ElevatorState.UP:
        return distance;
      case ElevatorState.DOWN:
        return -distance;
      default:
        return Math.abs(distance);
    }
  }

  addStop(targetFloor: number) {
    const targetDistance = this.countDistance(targetFloor);

    if (targetDistance === 0) return;

    const stops =
      targetDistance > 0
        ? this._currentDirectionStops
        : this._oppositeDirectionStops;

    if (stops.includes(targetFloor)) return;

    const stopInsertionIndex = this.getStopInsertionIndex(
      targetDistance,
      stops
    );

    stops.splice(stopInsertionIndex, 0, targetFloor);

    if (this.isIdle) {
      this.setState(this.nextStop);
    }
  }

  addPriorityStop(targetFloor: number, distance: number) {
    this.setState(targetFloor);

    if (distance === 0 || this._currentDirectionStops.includes(targetFloor)) {
      this.setState(this.nextStop);
      return;
    }

    this._currentDirectionStops.unshift(targetFloor);
  }
}
