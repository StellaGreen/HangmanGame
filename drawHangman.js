const chalk = require('chalk')

exports.drawHangman = (nb) => {
    if (nb === 6) { // FIRST DECOMPT, LIFE IS FULL
      console.log(chalk.green.bgBlack(`
      +---+
      |   |
          |
          |
          |
          |
    =========\nOk now you have 6 lifes\n`))
    } else if (nb === 5) { // THE PLAYER LOOSE A LETTER
      console.log(chalk.blue.bgBlack(`
      +---+
      |   |
      O   |
          |
          |
          |
    =========\nUch, ho nO ... 5 lifes...\n`));
    } else if (nb === 4) { // THE PLAYER LOOSE A LETTER
      console.log(chalk.blueBright.bgBlack(`
      +---+
      |   |
      O   |
      |   |
          |
          |
    =========\nUch, ... 4 lifes...\n`))
      } else if (nb === 3) { // THE PLAYER LOOSE A LETTER
      console.log(chalk.yellow.bgBlack(`
      +---+
      |   |
      O   |
     /|   |
          |
          |
    =========\nHo stop to fail you have 3 life left ...\n`))
      } else if (nb === 2) { // THE PLAYER LOOSE A LETTER
      console.log(chalk.magenta.bgBlack(`
      +---+
      |   |
      O   |
     /|\\  |
          |
          |
    =========\nOh sh*t please think good ... only 2 lifes ...\n`))
      } else if (nb === 1) { // THE PLAYER LOOSE A LETTER
      console.log(chalk.redBright.bgBlack(`
      +---+
      |   |
      O   |
     /|\\  |
     /    |
          |
    =========\nOH MY GOD 1 LIFE ONLY ! Good luck, I'm leaving here\n`))
    } else if (nb === 0) { // THE PLAYER LOOSE A LETTER
      console.log(chalk.red.bgBlack(`
      +---+
      |   |
      O   |
     /|\\  |
     / \\  |
          |
    =========`))
    }
}