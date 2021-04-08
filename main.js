const prompt = require('readline-sync')
const { hangman } = require('./game/gameStructure')
const chalk = require('chalk')
let chances = 10
//                            This is the main of my game

const resetGame = () => {
  const chance = chances
  hangman(chance)
  chances--
}
if (chances === 10){ // FIRST PLAY
  console.log(chalk.black.bgGreenBright(`\n\tPress y for play, other letter for stop the game\n`))
  let retry = prompt.question(chalk.white.bgBlack('\t\tDo you want play a game ?  '))
  if (retry === "y"){
    resetGame();
  }else {
    process.exit(1)
  }
}
if (chances !== 10){ // AFTER FIRST PLAY
  console.log(chalk.black.bgGreenBright(`\n\t Press y for play, other letter for stop the game \n`))
  let retry = prompt.question(chalk.white.bgBlack('\t\t Do you want retry ?  '))
  if (retry === "y"){
    resetGame();
  }else {
    process.exit(1)
  }
}
//                                     Good Game