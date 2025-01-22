// src/index.ts
export class TicTacToeGame {
  boardGame: string[][];

  constructor() {
    this.boardGame = this.boardGame = Array.from({ length: 3 }, () =>
      Array(3).fill(0)
    );
  }
}
