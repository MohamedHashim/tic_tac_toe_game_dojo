// tests/index.test.ts
import { TicTacToeGame } from '../src/';
import {
  diagonalLineOfOBoard,
  diagonalLineOfXBoard,
  drawStateBoard,
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
    describe('make a random move for every player', () => {
      it('given full placed board then the move is impossible ', () => {
        const game = new TicTacToeGame(drawStateBoard);
        expect(game.hasFreeCell('O')).toBeFalsy();
      });
    });
    describe('check the game states', () => {
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
      it('given diagonal line of X then return PLAYER X WON!', () => {
        const game = new TicTacToeGame(diagonalLineOfXBoard);
        expect(game.play()).toStrictEqual('PLAYER X WON!');
      });
      it('given diagonal line of O then return PLAYER O WON!', () => {
        const game = new TicTacToeGame(diagonalLineOfOBoard);
        expect(game.play()).toStrictEqual('PLAYER O WON!');
      });

      it('given draw state board then return THE GAME ENDS WITH A DRAW! ', () => {
        const game = new TicTacToeGame(drawStateBoard);
        expect(game.play()).toStrictEqual('THE GAME ENDS WITH A DRAW!');
      });
    });
  });
});
