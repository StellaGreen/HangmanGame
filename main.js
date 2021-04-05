const prompt = require('readline-sync') // PACKAGES AND MODULES
const randomWord = require('./word-bank.json')
const chalk = require('chalk')
// DEFINED OF LIFE AND POINTS
let wins = 0;
let losses = 0;
// FOR CHOOSE A WORD IMPORT AND PLACE THE WORD TO FOUND IN SECRET
const resetGame = () => {
  let hiddenWordArray = []
  let numberOfGuesses = 6
  let alreadyGuessedLetters = []
  const hangman = () => {
    const word = randomWord[Math.floor(Math.random() * randomWord.length)]
    const letters = word.split('')
    let numberOfRemainingLetters = word.length
    const findHiddenWordArray = () => {
      letters.forEach((_, index) => {
        hiddenWordArray[index] = '_'
      })}
    findHiddenWordArray()
    console.log(
      chalk.blue.inverse( // BEGENING OF THE GAME
        '\nWelcome in this game for save a man with you brain !\n'
      ))
    while (numberOfRemainingLetters > 0 && numberOfGuesses > 0) { // BOUCLE FOR THE GAME
      console.log(hiddenWordArray.join(' '))
      let guess = prompt
        .question(chalk.cyan('\nGive me a letter, please  ')) // QUESTION OF THE GAME
        .toLowerCase()
      const evaluateGuess = () => { // EVALUTATION AND CHANGEMENT OF LETTER FOUND
        if (guess === '') {
          console.log('\nHey, just one letter !')
        } else if (/[^a-zA-Z]/.test(guess[0])) {
          console.log('\nHey, just a letter !')
        } else if (/[a-zA-Z]/.test(guess[0])) {
          letters.forEach((letter, index) => {
            if (guess[0] === letter) {
              if (hiddenWordArray[index] === '_') {
                hiddenWordArray[index] = guess[0]
                numberOfRemainingLetters--
              }}})
          if ( // IF THE PLAYER HAVE FALSE
            !alreadyGuessedLetters.includes(guess[0]) &&
            !letters.includes(guess[0])
          ) {numberOfGuesses--}
          if (!alreadyGuessedLetters.includes(guess[0])) {
            alreadyGuessedLetters.push(guess[0]);
          }}}
      evaluateGuess()
      const drawHangman = () => {
        if (numberOfGuesses === 6) { // FIRST DECOMPT, LIFE IS FULL
          console.log(
            `\nFine you have ${numberOfGuesses} lifes`
          )
        } else if (numberOfGuesses >= 5) { // THE PLAYER LOOSE A LETTER
          console.log(`\n O \n\n\n`);
          console.log(
            `Uch, ho nO ... ${numberOfGuesses} lifes...`
          )
        } else if (numberOfGuesses === 0) { // THE PLAYER IS DEAD
          console.log(`\n O \n/|\\\n/ \\\n`);
          console.log(`Verry bad... ${numberOfGuesses} lifes, a man is dead because you don't have a brain...`)
        }
        console.log(`you found ${alreadyGuessedLetters} letter, that's greate.\n`)
      }
      drawHangman() // CALL THE FUNCTION TO DRAW THE HANGMAN IF PLAYER DIE
    }
    const showResults = () => {
      if (numberOfRemainingLetters > 0) { // THE PLAYER IS DEAD
        console.log(hiddenWordArray.join(' '))
        console.log(
          chalk.red(
            `\n\nHo dude...\nThe word is ${word}, why not to retry ?\n`
          )
        )
        losses++ // DECOMPT OF DEAD
      } else {
        console.log(hiddenWordArray.join(' ')); // THE PLAYER AS WIN
        console.log(
          chalk.green(`\n\nWooow\nThe answer is ${word}.\n`)
        )
        wins++ // DECOMPT OF WIN
      }
      console.log(
        `\nGood Game ${wins} win, ${losses} points loose !\n` // SHOW RESULT OF POINTS
      )
    }
    showResults()
  }
  hangman()
}
while (true) {
  resetGame();
}