var char = 'abcdefghijklmnopqrstuvwxyz'

const generateLetter = () => {
  let randomLetter = ""
    randomLetter = char.charAt(Math.floor(Math.random() * char.length))
  return randomLetter
}