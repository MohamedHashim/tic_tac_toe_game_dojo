// tests/index.test.ts
import { TicTacToeGame } from '../src/';

describe('tic tac toe game', () => {
  describe('create the board game', () => {
    it('start the game with empty board', () => {
      expect(new TicTacToeGame().boardGame).toStrictEqual([
        ['0', '0', '0'],
        ['0', '0', '0'],
        ['0', '0', '0'],
      ]);
    });
  });
});
