import { Board } from './board';

class Game {
  constructor(board: Board) {
    this.board = board;
  }

  private board: Board;
}

export { Game };
