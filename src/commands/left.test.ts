import placeCommand from './place';
import leftCommand from './left';
import Arena from '../arena';
import Robot, { Direction } from '../robot';

let robot;
beforeEach(() => {
  robot = new Robot();
  robot.arena = new Arena(5, 5);
});

it('turns a robot to the left', () => {
  placeCommand(robot, '2,2,NORTH');

  leftCommand(robot);
  expect(robot.direction).toBe(Direction.West);
  leftCommand(robot);
  expect(robot.direction).toBe(Direction.South);
  leftCommand(robot);
  expect(robot.direction).toBe(Direction.East);
  leftCommand(robot);
  expect(robot.direction).toBe(Direction.North);
});

it('does not turn an unplaced robot', () => {
  leftCommand(robot);
  expect(robot.direction).toBeNull();
});

