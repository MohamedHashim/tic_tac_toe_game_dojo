// tests/index.test.ts
import { TicTacToeGame } from '../src/';
import { emptyGameBoard } from './doubles/double';

describe('tic tac toe game', () => {
  describe('create the board game', () => {
    it('start the game with empty board', () => {
      expect(new TicTacToeGame().boardGame).toStrictEqual(emptyGameBoard);
    });
  });
  describe('start the game', () => {
    it('given vertical line of X then return PLAYER X WON!', () => {
      expect(new TicTacToeGame().play()).toStrictEqual('PLAYER X WON!');
    });
    it('given vertical line of O then return PLAYER O WON!', async () => {
      const game = new TicTacToeGame();
      expect(game.play()).toStrictEqual('PLAYER O WON!');
    });
  });
});
