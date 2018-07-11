import placeCommand from './place';
import Arena from '../arena';
import Robot, { Direction } from '../robot';

let robot;
beforeEach(() => {
  robot = new Robot();
  robot.arena = new Arena(5, 5);
});

it('sets a robots position and direction', () => {
  placeCommand(robot, '3,4,NORTH');
  expect(robot.x).toBe(3);
  expect(robot.y).toBe(4);
  expect(robot.direction).toBe(Direction.North);

  placeCommand(robot, '2,1,SOUTH');
  expect(robot.x).toBe(2);
  expect(robot.y).toBe(1);
  expect(robot.direction).toBe(Direction.South);

  placeCommand(robot, '0,0,EAST');
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(0);
  expect(robot.direction).toBe(Direction.East);

  placeCommand(robot, '2,2,WEST');
  expect(robot.x).toBe(2);
  expect(robot.y).toBe(2);
  expect(robot.direction).toBe(Direction.West);
});

it('ignores command if position is outside the arena', () => {
  placeCommand(robot, '7,3,NORTH');
  expect(robot.x).toBeNull();
  expect(robot.y).toBeNull();
  expect(robot.direction).toBeNull();

  placeCommand(robot, '3,7,NORTH');
  expect(robot.x).toBeNull();
  expect(robot.y).toBeNull();
  expect(robot.direction).toBeNull();

  placeCommand(robot, '3,-3,NORTH');
  expect(robot.x).toBeNull();
  expect(robot.y).toBeNull();
  expect(robot.direction).toBeNull();

  placeCommand(robot, '-3,3,NORTH');
  expect(robot.x).toBeNull();
  expect(robot.y).toBeNull();
  expect(robot.direction).toBeNull();
});
