const char = 'abcdefghijklmnopqrstuvwxyz'
let randomLetter = ""
let wins = 0
let losses = 0
let guessesLeft = 8
let currentGuesses = []

document.getElementById('win').innerHTML = wins
document.getElementById('loss').innerHTML = losses
document.getElementById('guessesL').innerHTML = 8

//generate random letter 
const generateLetter = () => {
  randomLetter = char.charAt(Math.floor(Math.random() * char.length))
  return console.log(randomLetter)
}

//runs function when page loads
window.onload = generateLetter()

//resets game
const reset = () => {
  currentGuesses = []
  document.getElementById('guesses').innerHTML = ' '
  document.getElementById('guessesL').innerHTML = guessesLeft = 8
  generateLetter()
}

//win/losses increments & check user answer against generated letter
document.onkeypress = function printKey(event) {
  let pressedKey = event.key 

if (97<= event.keyCode && event.keyCode <=122){
  
  if (currentGuesses.includes(pressedKey)) {
  alert(`You've already guessed that. Try again :)`)

  }else if (pressedKey === randomLetter ) {
    alert("Congrats, you won!")
    document.getElementById('win').innerHTML = ++wins
    reset()

  }else if (guessesLeft > 0) {
   currentGuesses.push(pressedKey)
   document.getElementById('guesses').innerHTML +=  pressedKey
   document.getElementById('guessesL').innerHTML = --guessesLeft
  
   }else {
    alert('You lost! Try again :)')
    document.getElementById('loss').innerHTML = ++losses
    reset()
  }
}else {
  alert('Please enter a letter :)')
}
}

