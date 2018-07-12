import Robot from '../robot';
import turnCommand from './turn';

export default function leftCommand (robot: Robot) {
  turnCommand(robot, -1)
}
