// tests/index.test.ts
import { TicTacToeGame } from '../src/';
import {
  antiDiagonalLineOfOBoard,
  antiDiagonalLineOfXBoard,
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
        expect(game.hasFreeCell()).toBeFalsy();
      });
      it('given empty board then the move is possible', () => {
        const game = new TicTacToeGame(emptyGameBoard);
        expect(game.hasFreeCell()).toBeTruthy();
      });
    });
    describe('switch the player with every move', () => {
      it('given current player is X then the next player is O', () => {
        const game = new TicTacToeGame();
        expect(game.switchPlayer('X')).toStrictEqual('O');
      });
      it('given current player is O then the next player is X', () => {
        const game = new TicTacToeGame();
        expect(game.switchPlayer('O')).toStrictEqual('X');
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

      it('given anti diagonal line of X then return PLAYER X WON!', () => {
        const game = new TicTacToeGame(antiDiagonalLineOfXBoard);
        expect(game.play()).toStrictEqual('PLAYER X WON!');
      });
      it('given antidiagonal line of O then return PLAYER O WON!', () => {
        const game = new TicTacToeGame(antiDiagonalLineOfOBoard);
        expect(game.play()).toStrictEqual('PLAYER O WON!');
      });

      it('given draw state board then return THE GAME ENDS WITH A DRAW! ', () => {
        const game = new TicTacToeGame(drawStateBoard);
        expect(game.play()).toStrictEqual('THE GAME ENDS WITH A DRAW!');
      });
    });
  });
});
