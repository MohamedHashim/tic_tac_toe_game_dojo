# Pomodoro Technique - :notebook: Notes from the journey :tomato: by :tomato:

Tic-Tac-Toe game which runs in BOT mode (random BOT moves for players X & O), printing on the screen all the player’s moves (with a 2-second timeout between each round) until someone wins or the game ends with a draw.

It has 5 features
1- Game Board Creation phase, The game will start with player X
2- Player X won with a vertical line
3- Player O won with a horizontal line
4- Player X won with a diagonal line
5- The game ends with a draw

## :bookmark: Labels

- ✅ : done
- 🚧 : WIP
- ⛌ : ERROR
- ❒ : TODO

## :tomato: 🍎 Pomodoro 1

✅ Test 1: create 3*3 game board, when start the game, return empty 3*3 game board
['0', '0', '0']
['0', '0', '0']
['0', '0', '0']

✅ Test 2.1: given vertical line of X, then return PLAYER X WON!
[['X', '0', '0'],
 ['X', '0', '0'],    => PLAYER X WON! 
 ['X', '0', '0']]

✅ Test 2.2: given vertical line of O, then return PLAYER O WON!
[['O', '0', '0'],
 ['O', '0', '0'],    => PLAYER O WON! 
 ['O', '0', '0']]

## :tomato: 🍎 Pomodoro 2

✅ Test 3.1: given horizontal line of X, then return PLAYER X WON!
[['X', 'X', 'X'],
 ['O', '0', '0'],    => PLAYER X WON! 
 ['0', 'O', '0']]

✅ Test 3.2: given horizontal line of O, then return PLAYER O WON!
[['O', 'O', 'O'],
 ['X', '0', '0'],    => PLAYER O WON! 
 ['X', 'X', '0']]

✅ Test 4.1: given diagonal line of X, then return PLAYER X WON!
[['X', 'O', 'O'],
 ['O', 'X', '0'],    => PLAYER X WON! 
 ['0', '0', 'X']]

✅ Test 4.2: given diagonal line of O, then return PLAYER O WON!
[['O', 'X', 'O'],
 ['X', 'O', '0'],    => PLAYER O WON! 
 ['X', 'X', 'O']]

## :tomato: 🍎 Pomodoro 3

✅ Test 5: given draw state board, then return THE GAME ENDS WITH A DRAW!
[['O', 'X', 'O'],
 ['X', 'O', 'X'],    => THE GAME ENDS WITH A DRAW! 
 ['X', 'O', 'X']]

## :tomato: 🍎 Pomodoro 4

✅ Test 6.1: make move in full place board, then move is impossible
['O', 'X', 'O'],
['X', 'O', 'X'], => false
['X', 'O', 'X'],

✅ Test 6.2: make move in empty board, then move is possible
['0', '0', '0'],
['0', '0', '0'], => true
['0', '0', '0'],

✅ Test 7: switch the player with every move
'X' => 'O'
'O' => 'X'

## backlog

✅ Implment hasFreeCell function
🎬 Implment makeRandomMove function
🎬 Implment switchPlayer function
🎬 Implement the board printing function
🎬 Implement the 2-second timeout between each round
🎬 Refactor the victory checks functions logic
