let randomLetter = ""
let wins = 0
let losses = 0
let guessesLeft = 8
let currentGuesses = []

document.getElementById('win').innerHTML = wins
document.getElementById('loss').innerHTML = losses
document.getElementById('guessesL').innerHTML = 8

//generates random letter 
const generateLetter = () => {
  randomLetter = (Math.floor(Math.random() * 26)+ 97)
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

//win/loss increments & check user answer against generated letter
document.onkeypress = function printKey(event) {
  let pressedKey = event.key 

if (97<= event.keyCode && event.keyCode <=122){
  
  if (currentGuesses.includes(pressedKey)) {
  alert(`You've already guessed that. Try again :)`)

  }else if (event.keyCode === randomLetter ) {
    alert("Congrats, you won!")
    wins++
    document.getElementById('win').innerHTML = wins
    reset()

  }else if (guessesLeft > 0) {
   currentGuesses.push(pressedKey)
   guessesLeft--
   document.getElementById('guesses').innerHTML +=  pressedKey
   document.getElementById('guessesL').innerHTML = guessesLeft
  
   }else {
    alert('You lost! Try again :)')
    losses++
    document.getElementById('loss').innerHTML = losses
    reset()
  }
}else {
  alert('Please enter a letter :)')
}
}

