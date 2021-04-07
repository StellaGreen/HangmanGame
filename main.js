const prompt = require('readline-sync') // PACKAGES AND MODULES
const randomWord = require('./wordBank.json')
const chalk = require('chalk')
const { drawHangman } = require('./drawHangman')

// DEFINED OF LIFE AND POINTS
let wins = 0;
let looses = 0;
// FOR CHOOSE A WORD IMPORT AND PLACE THE WORD TO FOUND IN SECRET
const resetGame = () => {
  let hiddenOfWordArray = []
  let numberOfGuesses = 7
  let playerGuessedLetters = []
  const hangman = () => {
    const word = randomWord[Math.floor(Math.random() * randomWord.length)]
    const letters = word.split('')
    let numberOfRemainingLetters = word.length
    const findHiddenWordArray = () => {
      letters.forEach((_, index) => {
        hiddenOfWordArray[index] = '_'
      })}
    findHiddenWordArray()
    console.log(
      chalk.black.bgRedBright( // BEGENING OF THE GAME
        '\n\t\tWelcome in this game for save a man with you brain !  '
      ))
    console.log(
      chalk.yellow.bgBlack.inverse( // BEGENING OF THE GAME
        '\n Please, make the terminal control large to be able to play in the best conditions ! '
      ))
      console.log(
        chalk.white.bgBlackBright( // BEGENING OF THE GAME
          `\n(  Word to find  )\n    |   |   |     \n    V   V   V     \n`
        ))
    while (numberOfRemainingLetters > 0 && numberOfGuesses > 0) { // BOUCLE FOR THE GAME
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
          }
          if (!playerGuessedLetters.includes(guess[0])) {
            playerGuessedLetters.push(guess[0]);
          }(console.log(chalk.cyan(`\nYou have tap the letter : ${playerGuessedLetters}\n`)))
        }}
      evaluateGuess()
      let nb = numberOfGuesses
      drawHangman(nb)// CALL THE FUNCTION TO DRAW THE HANGMAN 
    }
    const showResults = () => {
      if (numberOfRemainingLetters > 0) { // THE PLAYER IS DEAD
        console.log(hiddenOfWordArray.join(' '))
        console.log(
          chalk.red.bgBlack(`\n\tHo dude... You are finally a murder\n\tThe word is ${word}\n`)
        )
        looses++ // DECOMPT OF DEAD
      } else {
        console.log(hiddenOfWordArray.join(' ')); // THE PLAYER AS WIN
        console.log(
          chalk.green.bgBlack(`\n\t\tWooow\n\tThe answer is ${word}.\n`)
        )
        wins++ // DECOMPT OF WIN
      }
      console.log(chalk.magenta(
        `\n\t\t\t\tGame win ${wins}, ${looses} points loose !\n` // SHOW RESULT OF POINTS
      ))
    }
    
    showResults()
  }
  hangman()
}
while (true) {
    resetGame();
}