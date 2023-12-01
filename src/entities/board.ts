enum SLOT {
  BLANK = 0,
  WHITE = 1,
  BLACK = 2,
}

class Board {
  board: Array<Array<SLOT>>;

  constructor(rows: number, columns: number) {
    this.board = new Array(rows).fill(new Array(columns).fill(0));
  }
}

console.log(new Board(5, 2));

export { Board };
