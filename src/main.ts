import Arena from './arena';
import Robot from './robot';

export default function main() {
  const arena = new Arena(5, 5);
  const robot = new Robot();
  arena.addRobot(robot);

  let buffer = '';
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      buffer += chunk;
    }
  });

  process.stdin.on('end', () => {
    if (buffer) {
      robot.execute(buffer);
    }
  });
}
