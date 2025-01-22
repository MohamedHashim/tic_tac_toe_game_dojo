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

  async play(): Promise<string> {
    let playerName = this.playerX;
    while (true) {
      const success = this.hasFreeCell(playerName);
      if (!success) {
        return 'THE GAME ENDS WITH A DRAW!';
      }
      console.log(`Player ${playerName}:\n`);
      playerName = this.switchPlayer(playerName);

      this.printBoard();

      if (this.hasPlayerWon(playerName)) {
        return `PLAYER ${playerName} WON!`;
      }

      await this.delay(2000);
    }
  }

  private hasPlayerWon(player: string): boolean {
    // horizontal line check
    if (this.boardGame.some((row) => row.every((cell) => cell === player))) {
      return true;
    }
    // vertical line check
    for (let col = 0; col < this.boardGame.length; col++) {
      if (this.boardGame.every((row) => row[0] === player)) {
        return true;
      }
    }
    // diagonal line check
    if (
      this.boardGame.every((row, idx) => row[idx] === player) ||
      this.boardGame.every((row, idx) => row[2 - idx] === player)
    ) {
      return true;
    }
    return false;
  }

  hasFreeCell(player: string): boolean {
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

    this.makeRandomMove(freeCells, player);
    return true;
  }

  private makeRandomMove(freeCells: [number, number][], player: string) {
    const randomIndex = Math.floor(Math.random() * freeCells.length);
    const [selectedRow, selectedCol] = freeCells[randomIndex];
    this.boardGame[selectedRow][selectedCol] = player;
  }

  switchPlayer(playerName: string): string {
    return playerName === this.playerX ? this.playerO : this.playerX;
  }

  private printBoard() {
    console.log(
      this.boardGame.map((row) => row.join('|')).join('\n-+-+-\n') + '\n'
    );
  }
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

const game = new TicTacToeGame();

function main() {
  const result = game.play();
  console.log(result);
}

main();
