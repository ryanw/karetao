import scriptCommand from './script';
import Arena from '../arena';
import Robot, { Direction } from '../robot';

let robot: Robot;
beforeEach(() => {
  robot = new Robot();
  robot.arena = new Arena(5, 5);
});

it('executes commands', () => {
  const logSpy = jest.spyOn(console, 'log');

  // Prevent console message appearing while tests run
  logSpy.mockImplementation(() => jest.fn());

  scriptCommand(robot, `
    PLACE 1,0,NORTH
    MOVE
    RIGHT
    MOVE
    MOVE
    REPORT
  `);

  expect(robot.x).toBe(3);
  expect(robot.y).toBe(1);
  expect(logSpy).toBeCalledWith('3,1,EAST');

  logSpy.mockRestore();
});


