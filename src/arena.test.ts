import Arena from './arena';
import Robot from './robot';

it('initialises with a default size', () => {
  const arena = new Arena();
  expect(arena.width).toBeGreaterThan(0);
  expect(arena.height).toBeGreaterThan(0);
});

it('initialises with a specified size', () => {
  const arena = new Arena(12, 45);
  expect(arena.width).toBe(12);
  expect(arena.height).toBe(45);
});

it('does not allow negative sizes', () => {
  expect(() => {
    const arena = new Arena(-12, 45);
  }).toThrow();

  expect(() => {
    const arena = new Arena(12, -45);
  }).toThrow();

  expect(() => {
    const arena = new Arena(-12, -45);
  }).toThrow();
});

it('adds a robot', () => {
  const arena = new Arena(12, 45);
  const robot = new Robot();
  arena.addRobot(robot);
  expect(arena.robots.length).toBe(1);
  expect(arena.robots[0]).toBe(robot);
  expect(robot.arena).toBe(arena);
});
