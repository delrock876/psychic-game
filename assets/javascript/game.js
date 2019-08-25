const char = 'abcdefghijklmnopqrstuvwxyz'

const generateLetter = () => {
  let randomLetter = ""
    randomLetter = char.charAt(Math.floor(Math.random() * char.length))
  return randomLetter
}


document.onkeyup = function (event){
  let pressedKey = event.key
document.getElementById('pressed').innerHTML += " " + pressedKey + " "
}



// const checkGuess

// const guessesLeft = () => {
//   let guesses = 8
// if //guessedLetter

//  for (let i=0; i <= guesses; i++ ){

//  }

//   }
