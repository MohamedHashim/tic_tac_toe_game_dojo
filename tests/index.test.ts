// tests/index.test.ts
import { TicTacToeGame } from '../src/';
import { emptyGameBoard } from './doubles/double';

describe('tic tac toe game', () => {
  describe('create the board game', () => {
    it('start the game with empty board', () => {
      expect(new TicTacToeGame().boardGame).toStrictEqual([emptyGameBoard]);
    });
  });
});
