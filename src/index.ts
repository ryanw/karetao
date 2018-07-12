import Arena from './arena';
import Robot from './robot';

function main() {
  const arena = new Arena(5, 5);
  const robot = new Robot();
  arena.addRobot(robot);
  robot.execute(`
    PLACE 3,4,WEST
    MOVE
    LEFT
    MOVE
    REPORT
  `);
}

main();
