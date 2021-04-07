const randomWord = require('./wordBank.json')
const prompt = require('readline-sync') // PACKAGES AND MODULES 
const chalk = require('chalk')
const { drawHangman } = require('./drawHangman')
const { showResults } = require('./showResults')

  let hiddenOfWordArray = []
  let playerGuessedLetters = []

exports.hangman = (numberOfGuesses) => {
    const word = randomWord[Math.floor(Math.random() * randomWord.length)] // CHOOSE A RANDOM WORD
    const letters = word.split('')
    let numberOfRemainingLetters = word.length
    const findHiddenWordArray = () => { // TRANSFORME IN HIDDEN
      letters.forEach((_, index) => {
        hiddenOfWordArray[index] = '_'
      })}
    findHiddenWordArray()
    console.log(
      chalk.black.bgRedBright( // BEGENING OF THE GAME
        '\n\t\tWelcome in this game for save a man with you brain !  '
      ))
    console.log(
      chalk.yellow.bgBlack.inverse( 
        '\n Please, make the terminal control large to be able to play in the best conditions ! '
      ))
      console.log(
        chalk.white.bgBlackBright(
          `\n(  Word to find  )\n    |   |   |     \n    V   V   V     \n`
        ))
    while (numberOfRemainingLetters > 0 && numberOfGuesses > 0) { // WHILE THE WORD IS FOUND OR NOT
      console.log(hiddenOfWordArray.join(' '))
      let guess = prompt
        .question(chalk.cyan.bgBlack('\n  Give me a letter, please  \t')) // QUESTION OF THE GAME
        .toLowerCase()
      const evaluateGuess = () => { // EVALUTATION AND CHANGEMENT OF LETTER FOUND
        if (guess === '') {
          console.log('\nHey, just one letter !')
        } else if (/[^a-zA-Z]/.test(guess[0])) {
          console.log('\nHey, just a letter !')
          return process.exit(1)
        } else if (/[a-zA-Z]/.test(guess[0])) {
          letters.forEach((letter, index) => {
            if (guess[0] === letter) {
              if (hiddenOfWordArray[index] === '_') {
                hiddenOfWordArray[index] = guess[0]
                numberOfRemainingLetters--
              }}})
          if ( // IF THE PLAYER HAVE FALSE
            !playerGuessedLetters.includes(guess[0]) &&
            !letters.includes(guess[0])
          ) {
            numberOfGuesses--
            (console.log(`${numberOfGuesses > 0 ? `\nUch you have just ${numberOfGuesses === 1 ? `${numberOfGuesses} life` : `${numberOfGuesses} lifes`} for win ...` : ``}\n`))
          } // ALL THE LETTER (for help the player)
          if (!playerGuessedLetters.includes(guess[0])) {
            playerGuessedLetters.push(guess[0]);
          }(console.log(chalk.cyan(`\nYou have tap the letter : ${playerGuessedLetters}\n`)))
        }}
      evaluateGuess() // CALL THE FUNCTION EVALUATE INPUT
      const nb = numberOfGuesses
      drawHangman(nb)// CALL THE FUNCTION TO DRAW THE HANGMAN 
    }
    const rest = numberOfRemainingLetters
    const hidden = hiddenOfWordArray
    const wo = word
    showResults(rest, hidden, wo)
  }