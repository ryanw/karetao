import Robot, { Direction } from './robot';
import Arena from './arena';

let robot: Robot;
beforeEach(() => {
  robot = new Robot();
  robot.arena = new Arena(5, 5);
});

it('should execute a place command', () => {
  robot.execute('PLACE 2,3,WEST');
  expect(robot.x).toBe(2);
  expect(robot.y).toBe(3);
  expect(robot.direction).toBe(Direction.West);
});
