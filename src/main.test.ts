import { Readable } from 'stream';
import main from './main';
import mockCli = require('mock-cli');

class ReadableStream extends Readable {
  private _input: string | null;

  constructor(input: string) {
    super();
    this._input = input;
  }

  _read(size: any) {
    if (this._input) {
      this.push(this._input);
      this._input = null;
    }
  }
}


it('runs a script from stdin', () => {
  const instructions = `
    PLACE 1,0,NORTH
    MOVE
    RIGHT
    MOVE
    MOVE
    REPORT
  `;

  const stdio = {
    stdin: new ReadableStream(instructions),
    stdout: process.stdout,
    stderr: process.stderr,
  };


  mockCli(['node', 'foo.js'], stdio, (error: any, result: any) => {
    expect(logSpy).toBeCalledWith('3,1,EAST');

    logSpy.mockRestore();
  });

  const logSpy = jest.spyOn(console, 'log');
  logSpy.mockImplementation(() => jest.fn());
  main();
});
