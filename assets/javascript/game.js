const char = 'abcdefghijklmnopqrstuvwxyz'
let randomLetter = ""
let currentGuess = []
let wins = 1
let losses = 1
let guessesLeft = 9

//generate random letter 
const generateLetter = () => {
  randomLetter = char.charAt(Math.floor(Math.random() * char.length))
  return console.log(randomLetter)
}
window.onload = generateLetter()


document.onkeyup = function printKey(event) {
  let pressedKey = event.key

  if (pressedKey === randomLetter) {
    alert("Congrats, you won!")
    document.getElementById('win').innerHTML = wins++
    document.getElementById('guesses').innerHTML = ' '
    guessesLeft = 9
    generateLetter()

  } else if (currentGuess.length < 9) {
    currentGuess.push(document.getElementById('guesses').innerHTML += " " + pressedKey + " ")
    document.getElementById('guessesL').innerHTML = guessesLeft--
  } else {
    alert('You lost! Try again :)')
    currentGuess = []
    guessesLeft = 9
    document.getElementById('guesses').innerHTML = ' '
    document.getElementById('loss').innerHTML = losses++
    generateLetter()
  }
}
