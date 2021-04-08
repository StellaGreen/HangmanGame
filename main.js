//                         I import the structure of my game 
const { hangman } = require('./game/gameStructure')

//                            This is the main of my game
const newGame = () => {
  hangman()
}
while (true) {//               We love play in unlimited !
    newGame();
}
//                                     Good Game