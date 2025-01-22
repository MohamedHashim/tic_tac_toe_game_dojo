// src/index.ts
export class TicTacToeGame {
  boardGame: string[][];
  playerX = 'X';
  playerO = 'O';

  constructor(board?: string[][]) {
    this.boardGame = board
      ? board
      : Array.from({ length: 3 }, () => Array(3).fill('0'));
  }
  play(): string {
    if (this.isVerticalLineVictory(this.playerX)) {
      return 'PLAYER X WON!';
    } else {
      return 'PLAYER O WON!';
    }
  }

  private isVerticalLineVictory(player: string): boolean {
    const size = this.boardGame.length;

    for (let col = 0; col < size; col++) {
      if (this.boardGame.every((row) => row[col] === player)) {
        return true;
      }
    }
    return false;
  }
}
