import Robot from '../robot';

export default class Command {
  execute(robot: Robot, arg: string | undefined) {
    if (!robot.arena) throw new Error("Robot isn't in an Arena");
  }
}
