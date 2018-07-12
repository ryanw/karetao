import placeCommand from './place';
import moveCommand from './move';
import Arena from '../arena';
import Robot, { Direction } from '../robot';

let robot: Robot;
beforeEach(() => {
  robot = new Robot();
  robot.arena = new Arena(5, 5);
});

it('moves north', () => {
  placeCommand(robot, '0,0,NORTH');

  moveCommand(robot);
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(1);

  moveCommand(robot);
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(2);

  moveCommand(robot);
  expect(robot.x).toBe(0);
  expect(robot.y).toBe(3);
});

it('moves south', () => {
  placeCommand(robot, '4,4,SOUTH');

  moveCommand(robot);
  expect(robot.x).toBe(4);
  expect(robot.y).toBe(3);

  moveCommand(robot);
  expect(robot.x).toBe(4);
  expect(robot.y).toBe(2);

  moveCommand(robot);
  expect(robot.x).toBe(4);
  expect(robot.y).toBe(1);
});

it('moves east', () => {
  placeCommand(robot, '0,0,EAST');

  moveCommand(robot);
  expect(robot.x).toBe(1);
  expect(robot.y).toBe(0);

  moveCommand(robot);
  expect(robot.x).toBe(2);
  expect(robot.y).toBe(0);

  moveCommand(robot);
  expect(robot.x).toBe(3);
  expect(robot.y).toBe(0);
});

it('moves west', () => {
  placeCommand(robot, '4,4,WEST');

  moveCommand(robot);
  expect(robot.x).toBe(3);
  expect(robot.y).toBe(4);

  moveCommand(robot);
  expect(robot.x).toBe(2);
  expect(robot.y).toBe(4);

  moveCommand(robot);
  expect(robot.x).toBe(1);
  expect(robot.y).toBe(4);
});

it('does not fall off the north edge', () => {
  placeCommand(robot, '2,2,NORTH');
  moveCommand(robot); // 3
  moveCommand(robot); // 4
  moveCommand(robot); // *dead*
  moveCommand(robot); // *dead*
  moveCommand(robot); // *dead*
  moveCommand(robot); // *dead*

  expect(robot.x).toBe(2);
  expect(robot.y).toBe(4);
});

it('does not fall off the south edge', () => {
  placeCommand(robot, '2,2,SOUTH');
  moveCommand(robot); // 1
  moveCommand(robot); // 0
  moveCommand(robot); // *dead*
  moveCommand(robot); // *dead*
  moveCommand(robot); // *dead*
  moveCommand(robot); // *dead*

  expect(robot.x).toBe(2);
  expect(robot.y).toBe(0);
});

it('does not fall off the east edge', () => {
  placeCommand(robot, '2,2,EAST');
  moveCommand(robot); // 3
  moveCommand(robot); // 4
  moveCommand(robot); // *dead*
  moveCommand(robot); // *dead*
  moveCommand(robot); // *dead*
  moveCommand(robot); // *dead*

  expect(robot.x).toBe(4);
  expect(robot.y).toBe(2);
});

it('does not fall off the west edge', () => {
  placeCommand(robot, '2,2,WEST');
  moveCommand(robot); // 1
  moveCommand(robot); // 0
  moveCommand(robot); // *dead*
  moveCommand(robot); // *dead*
  moveCommand(robot); // *dead*
  moveCommand(robot); // *dead*

  expect(robot.x).toBe(0);
  expect(robot.y).toBe(2);
});

it('does not move an unplaced robot', () => {
  moveCommand(robot);
  expect(robot.x).toBeNull();
  expect(robot.y).toBeNull();
});
