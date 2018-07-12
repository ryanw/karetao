import Robot, { Direction } from '../robot';

export default function turnCommand (robot: Robot, amount: number) {
  // Ignore robot that hasn't been placed
  if (!robot.direction) return;

  const directions = Object.values(Direction);
  let directionIndex = directions.indexOf(robot.direction);
  if (directionIndex === -1) throw new Error(`Robot has invalid direction: ${robot.direction}`);

  directionIndex = (directionIndex + amount) % directions.length;
  while (directionIndex < 0) directionIndex += directions.length;

  robot.direction = directions[directionIndex];
}
