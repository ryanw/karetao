import { Point } from './geom';
import Arena from './arena';

export default class Robot {
  private _position: Point | null;
  private _arena: Arena | null;

  constructor() {
  }

  set arena(arena: Arena) {
    this._arena = arena;
  }
}
