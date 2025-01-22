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
    if (
      this.isVerticalLineVictory(this.playerX) ||
      this.isHorizontalLineVictory(this.playerX) ||
      this.isDiagonalLineVictory(this.playerX)
    ) {
      return 'PLAYER X WON!';
    } else if (
      this.isVerticalLineVictory(this.playerO) ||
      this.isHorizontalLineVictory(this.playerO) ||
      this.isDiagonalLineVictory(this.playerO)
    )
      return 'PLAYER O WON!';
    return 'THE GAME ENDS WITH A DRAW!';
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

  private isHorizontalLineVictory(player: string): boolean {
    for (let row = 0; row < this.boardGame.length; row++) {
      if (this.boardGame[row].every((cell) => cell === player)) {
        return true;
      }
    }
    return false;
  }

  private isDiagonalLineVictory(player: string): boolean {
    const size = this.boardGame.length;
    const mainDiagonalVictory = this.boardGame.every(
      (row, i) => row[i] === player
    );
    const antiDiagonalVictory = this.boardGame.every(
      (row, i) => row[size - 1 - i] === player
    );
    return mainDiagonalVictory || antiDiagonalVictory;
  }

  hasFreeCell(): boolean {
    const freeCells: [number, number][] = [];
    for (let row = 0; row < this.boardGame.length; row++) {
      for (let col = 0; col < this.boardGame[row].length; col++) {
        if (this.boardGame[row][col] === '0') {
          freeCells.push([row, col]);
        }
      }
    }

    if (freeCells.length === 0) {
      return false;
    }

    return true;
  }
}
