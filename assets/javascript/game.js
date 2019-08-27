const char = 'abcdefghijklmnopqrstuvwxyz'
let randomLetter = ""
let wins = 0
let losses = 0
let guessesLeft = 8

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
  document.getElementById('guesses').innerHTML = ' '
  document.getElementById('guessesL').innerHTML = guessesLeft = 8
  generateLetter()
}

//win/losses increments & check user answer against generated letter
document.onkeyup = function printKey(event) {
  let pressedKey = event.key

  if (pressedKey === randomLetter) {
    alert("Congrats, you won!")
    document.getElementById('win').innerHTML = ++wins
    reset()

  } else if (guessesLeft > 0) {
    (document.getElementById('guesses').innerHTML += " " + pressedKey + " ")
    document.getElementById('guessesL').innerHTML = --guessesLeft

  } else {
    alert('You lost! Try again :)')
    document.getElementById('loss').innerHTML = ++losses
    reset()
  }
}
