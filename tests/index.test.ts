// tests/index.test.ts
import { TicTacToeGame } from '../src/';
import {
  emptyGameBoard,
  horizontalLineOfOBoard,
  horizontalLineOfXBoard,
  verticalLineOfOBoard,
  verticalLineOfXBoard,
} from './doubles/double';

describe('tic tac toe game', () => {
  describe('create the board game', () => {
    it('start the game with empty board', () => {
      expect(new TicTacToeGame().boardGame).toStrictEqual(emptyGameBoard);
    });
  });
  describe('start the game', () => {
    it('given vertical line of X then return PLAYER X WON!', () => {
      const game = new TicTacToeGame(verticalLineOfXBoard);
      expect(game.play()).toStrictEqual('PLAYER X WON!');
    });
    it('given vertical line of O then return PLAYER O WON!', async () => {
      const game = new TicTacToeGame(verticalLineOfOBoard);
      expect(game.play()).toStrictEqual('PLAYER O WON!');
    });

    it('given horizontal line of X then return PLAYER X WON!', () => {
      const game = new TicTacToeGame(horizontalLineOfXBoard);
      expect(game.play()).toStrictEqual('PLAYER X WON!');
    });
    it('given horizontal line of O then return PLAYER O WON!', () => {
      const game = new TicTacToeGame(horizontalLineOfOBoard);
      expect(game.play()).toStrictEqual('PLAYER O WON!');
    });
  });
});
