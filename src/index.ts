// src/index.ts
export class TicTacToeGame {
  boardGame: string[][];

  constructor(board?: string[][]) {
    this.boardGame = board
      ? board
      : Array.from({ length: 3 }, () => Array(3).fill('0'));
  }

  play(): string {
    return 'PLAYER X WON!';
  }
}
