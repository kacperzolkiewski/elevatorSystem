# Elevator System

## Application

Application written using React Native framework in combination with TypeScript. The purpose of the application is to control the operation of 10 elevators in a building.

In the application we have two main functionalities:

- send the elevator to the selected floor (from 0 to 9),
- call up the elevator to the floor we are currently on.

Sending the elevator can be done through buttons (0 to 9) in the elevator when the door is open, that is, when you are on the same floor as the elevator.

If you want a different elevator swipe to the right or left.

If we want to be on a different floor, we press the "Current Floor" button and then a menu will appear in which we can select the floor (from 0 to 9).

Elevator call is done through the buttons on the right side of the elevator:

- up arrow - we specify that we want to go up when the elevator arrives,
- down arrow - we specify that we want to go down after the elevator arrives.

After pressing the arrow button, the system iterates through all the elevators and looks for those that are not moving or moving in our direction. The next step is to find and select from these elevators the one with the shortest distance to our floor.

## Improvement

The arrow buttons still have room for improvement, as they currently don't light up a different color as the elevator moves toward them like in real life, but the functionality associated with them works.

The second thing that needs to be improved is stopping the elevator, only on floors that the user has selected. Currently, if the elevator goes from floor 0 to floor 9, and the user is on floor 6, the elevator will open anyway even though there was no planned stop on floor 6.

## Development

Clone this repository with command:

- clone with HTTPS:

```
    git clone https://github.com/kacperzolkiewski/elevatorSystem.git
```

- clone with SSH:

```
    git clone git@github.com:kacperzolkiewski/elevatorSystem.git
```

When you finished cloning go to repository in terminal and run:

```
    npm install
```

It will install all dependencies that project needs to work.
Next step is to run application through command:

```
    npm run start
```

The terminal will show a QR code, which you scan with the "Expo Go" app, which you can find in the Play Store on android or App Store on ios.

I tested this app only on android and I do not know exacly how it behaves on ios.
