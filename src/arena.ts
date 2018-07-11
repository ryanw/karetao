import { Size } from './geom';
import Robot from './robot';

export default class Arena {
  private _size: Size;
  private _robots: Array<Robot> = [];

  constructor(width: number = 5, height: number = 5) {
    if (width < 0 || height < 0) {
      throw new Error("Negative sizes are not allowed");
    }
    this._size = { width, height };
  }

  get width() {
    return this._size.width;
  }

  get height() {
    return this._size.height;
  }

  addRobot(robot: Robot) {
    this._robots.push(robot);
  }
}
