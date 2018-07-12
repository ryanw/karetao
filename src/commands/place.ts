import Robot, { Direction } from '../robot';
import { Point } from '../geom';

export default function placeCommand(robot: Robot, arg: string) {
  const args: Array<string> = arg.replace(/\s+/g, '').toUpperCase().split(',');
  if (args.length !== 3) throw new Error("PlaceCommand requires 3 arguments");

  const x: number = parseInt(args[0], 10);
  if (isNaN(x)) throw new Error("X coordinate is not a number");

  const y: number = parseInt(args[1], 10);
  if (isNaN(y)) throw new Error("Y coordinate is not a number");

  if (Object.values(Direction).indexOf(args[2]) === -1) {
    throw new Error(`${args[2]} is not a valid direction`);
  }
  const direction: Direction = args[2] as Direction;

  const { arena } = robot;
  if (!arena) return;

  if (x < 0 || y < 0 || x >= arena.width || y >= arena.height) {
    // Ignore suicidal placement
    return;
  }

  robot.position = { x, y };
  robot.direction = direction;
}
