import { Point } from './geom';
import Arena from './arena';

export enum Direction {
  North = 'NORTH',
  South = 'SOUTH',
  East = 'EAST',
  West = 'WEST',
}

export default class Robot {
  public arena: Arena | null = null;
  private _position: Point | null = null;
  private _direction: Direction | null = null;

  constructor() {
  }

  get x(): number | null {
    if (!this._position) return null;
    return this._position.x;
  }

  get y(): number | null {
    if (!this._position) return null;
    return this._position.y;
  }

  get position(): Point | null {
    this._position;
  }

  set position(value: Point) {
    this._position = value;
  }

  get direction() {
    return this._direction;
  }

  set direction(value: Direction) {
    this._direction = value;
  }

  execute(instructions: string) {
  }
}
