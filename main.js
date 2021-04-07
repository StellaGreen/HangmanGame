//                         I import the structure of my game 
const { hangman } = require('./game/gameStructure')

//                            This is the main of my game
const resetGame = () => {
  let lifes = 7  
  const numberOfGuesses = lifes
  hangman(numberOfGuesses)
}
while (true) {//               We love play in unlimited !
    resetGame();
}
//                                     Good Game