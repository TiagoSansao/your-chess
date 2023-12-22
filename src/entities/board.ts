import { Piece } from '../interfaces/piece';

interface Slot {
  position: string;
  piece: Piece | null;
}

class Board {
  private board: Array<Array<Slot>>;

  constructor(rows: number, columns: number) {
    this.board = new Array(rows).fill(new Array(columns).fill(null));
    this.enumerateBoard();
    console.log(this.board);
  }

  private enumerateBoard() {
    this.board = this.board.map((row, rowIndex) => {
      return row.map((_column, columnIndex) => {
        const letter = String.fromCharCode(columnIndex + 97);
        const number = rowIndex + 1;

        const slot: Slot = {
          position: letter + number,
          piece: null,
        };

        return slot;
      });
    });
  }
}

new Board(8, 8);

export { Board };
