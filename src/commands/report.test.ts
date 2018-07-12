import reportCommand from './report';
import placeCommand from './place';
import Arena from '../arena';
import Robot from '../robot';

let robot: Robot;
beforeEach(() => {
  robot = new Robot();
  robot.arena = new Arena(5, 5);
});

it('reports the robots current state', () => {
  const logSpy = jest.spyOn(console, 'log');

  // Prevent console message appearing while tests run
  logSpy.mockImplementation(() => jest.fn());

  placeCommand(robot, '1,2,NORTH');
  reportCommand(robot);
  expect(logSpy).toBeCalledWith('1,2,NORTH')

  placeCommand(robot, '3,4,EAST');
  reportCommand(robot);
  expect(logSpy).toBeCalledWith('3,4,EAST')

  logSpy.mockRestore();
});

