import placeCommand from './place';
import rightCommand from './right';
import Arena from '../arena';
import Robot, { Direction } from '../robot';

let robot: Robot;
beforeEach(() => {
  robot = new Robot();
  robot.arena = new Arena(5, 5);
});

it('turns a robot to the right', () => {
  placeCommand(robot, '2,2,NORTH');

  rightCommand(robot);
  expect(robot.direction).toBe(Direction.East);
  rightCommand(robot);
  expect(robot.direction).toBe(Direction.South);
  rightCommand(robot);
  expect(robot.direction).toBe(Direction.West);
  rightCommand(robot);
  expect(robot.direction).toBe(Direction.North);
});

it('does not turn an unplaced robot', () => {
  rightCommand(robot);
  expect(robot.direction).toBeNull();
});

