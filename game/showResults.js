const chalk = require('chalk')

// DEFINED OF LIFE AND POINTS
let wins = 0;
let looses = 0;
exports.showResults = (rest, hidden, wo) => {
    if (rest > 0) { // THE PLAYER IS DEAD
      console.log(hidden.join(' '))
      console.log(
        chalk.red.bgBlack(`\n\tHo dude... You are finally a murder\n\tThe word is ${wo}\n`)
      )
      looses++ // DECOMPT OF DEAD
    } else {
      console.log(hidden.join(' ')); // THE PLAYER AS WIN
      console.log(
        chalk.green.bgBlack(`\n\t\tWooow\n\tThe answer is ${wo}.\n`)
      )
      wins++ // DECOMPT OF WIN
    }
    console.log(chalk.magenta(
      `\n\t\t\t\tGame win ${wins}, ${looses} points loose !\n` // SHOW RESULT OF POINTS
    ))
  }