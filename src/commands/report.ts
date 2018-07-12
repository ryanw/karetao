import Robot from '../robot';

export default function reportCommand (robot: Robot) {
  if (!robot.arena || !robot.direction || !robot.position) return;

  console.log(`${robot.x},${robot.y},${robot.direction}`);
}
