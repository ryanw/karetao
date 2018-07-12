import Robot from '../robot';
import Command from './command';
import placeCommand from './place';
import moveCommand from './move';
import leftCommand from './left';
import rightCommand from './right';
import reportCommand from './report';

const COMMAND_MAP: { [key: string]: Command } = {
  'PLACE':  placeCommand,
  'MOVE':   moveCommand,
  'LEFT':   leftCommand,
  'RIGHT':  rightCommand,
  'REPORT': reportCommand,
};

export default function (robot: Robot, instructions: string) {
  const tokens: Array<string> = instructions.replace(/^\s+|\s+$/g, '').toUpperCase().split(/\s+/);
  for (let i: number = 0; i < tokens.length; i++) {
    let arg: string | null = null;
    const commandName: string = tokens[i];
    const command = COMMAND_MAP[commandName] as Function;
    if (!command) throw new Error(`Invalid command ${commandName}`);

    // PLACE takes an argument
    if (commandName === 'PLACE') {
      arg = tokens[++i];
    }

    command(robot, arg);
  }
}
