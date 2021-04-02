const fs = require('fs')
const readlineSync = require("readline");
const chalk = require('chalk')
let notFound = true
let counter = 10;
let guessed = [];

const words = require("./word-bank.json");
let wordBank = [];

const initWordBank = () => {
    for (let i = 0; i < words.length; i++) {
      if (words[i].label.length > 4) {
        wordBank.push(words[i].label)
      }
    }
}
initWordBank();
const getSecretWord = (aleat) => {
    const n = Math.floor(Math.random() * aleat.length)
    let secretWord = aleat[n]
    secretWord = secretWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    secretWord = secretWord.toUpperCase()
    return secretWord
}

const secretWord = getSecretWord(wordBank); //-----------------------MOT SECRET A TROUVER

const secret = (str) => {
    let secretToGuess = "";
    for (let i = 0; i < str.length; i++) {
      if (guessed.indexOf(str[i]) !== -1) {
        secretToGuess += str[i];
      } else {
        secretToGuess += "_ ";
      }
    }
    return secretToGuess; // -----------------------------------------MOT A TROUVER CACHÉ _ _ _ _ _ _
  };

const drawing = num => { // ---------------------------------------------DESSIN SI ERREUR
    let draw = "   |---|\n";
    if (num < 9 ? (draw += "   o   |\n") : (draw += "       |\n"));
    if (num < 6 ? (draw += "  /|\\  |\n") : (draw += "       |\n"));
    if (num < 4 ? (draw += "   -   |\n") : (draw += "       |\n"));
    draw += `       |\n       |\n   ------\n`;
    return console.log(draw);
  };
while(notFound){
    const toTry = secret(secretWord)
    console.log(`\n You have just ${counter} life${counter > 0 ? 's' : ''}.`)
    console.log(`This is the word to found :\n\t${toTry}`)
    const input = readlineSync.question(`What's you'r letter ?`)
    if(input > 2){
        console.log(`just one letter please`)
    }
    if(toTry === secret(secretWord)){
        counter--
    } if(counter === 0){
        console.log("FAIL");
        console.log(`The secret word was: ${secretWord}`);
        console.log(`
        |---|
        o   |
       /|\\  |
        -   |
       / \\  |
            |
        ------`);
        return readline.close()
    } if (toTry === 0){
        console.log(`Congratulation the hangman is save !`)
        readline.close()
    } else {
        console.log(`You got it ! the secret word is : ${secret(secretWord)}`)
    }
}
