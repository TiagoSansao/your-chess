import { Color, Piece } from '../interfaces/piece';

class Pawn implements Piece {
  public color: Color;

  constructor(color: Color) {
    this.color = color;
  }
}
