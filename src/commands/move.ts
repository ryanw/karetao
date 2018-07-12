import Robot, { Direction } from '../robot';

export default function moveCommand (robot: Robot) {
  if (!robot.arena || !robot.direction || !robot.position) return;
  const { arena, direction, position } = robot;

  switch (direction) {
    case Direction.North:
      if (position.y < arena.height - 1) position.y++;
      break;

    case Direction.South:
      if (position.y > 0) position.y--;
      break;

    case Direction.East:
      if (position.x < arena.width - 1) position.x++;
      break;

    case Direction.West:
      if (position.x > 0) position.x--;
      break;
  }
}
