//                         I import the structure of my game 
const { hangman } = require('./game/gameStructure')

//                            This is the main of my game
const resetGame = () => {
  hangman()
}
while (true) {//               We love play in unlimited !
    resetGame();
}
//                                     Good Game