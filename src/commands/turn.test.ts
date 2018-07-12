import placeCommand from './place';
import turnCommand from './turn';
import Arena from '../arena';
import Robot, { Direction } from '../robot';

let robot: Robot;
beforeEach(() => {
  robot = new Robot();
  robot.arena = new Arena(5, 5);
});

it('turns a robot to the left', () => {
  placeCommand(robot, '2,2,NORTH');

  turnCommand(robot, -1);
  expect(robot.direction).toBe(Direction.West);
  turnCommand(robot, -1);
  expect(robot.direction).toBe(Direction.South);
  turnCommand(robot, -1);
  expect(robot.direction).toBe(Direction.East);
  turnCommand(robot, -1);
  expect(robot.direction).toBe(Direction.North);
});

it('turns a robot to the right', () => {
  placeCommand(robot, '2,2,NORTH');

  turnCommand(robot, 1);
  expect(robot.direction).toBe(Direction.East);
  turnCommand(robot, 1);
  expect(robot.direction).toBe(Direction.South);
  turnCommand(robot, 1);
  expect(robot.direction).toBe(Direction.West);
  turnCommand(robot, 1);
  expect(robot.direction).toBe(Direction.North);
});

it('does not turn an unplaced robot', () => {
  turnCommand(robot, 1);
  expect(robot.direction).toBeNull();
});
