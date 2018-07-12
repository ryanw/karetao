import Robot from '../robot';
import turnCommand from './turn';

export default function rightCommand (robot: Robot) {
  turnCommand(robot, 1)
}
