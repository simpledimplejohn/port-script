// test script for generating a word

// this takes a number and returns a letter
const letterFromNumber = (number) => {
    letter = String.fromCharCode(number)
    return letter
}

// now generate a random letter
const randomLetter = () => {
    let number = Math.floor(Math.random() * (90 - 65) + 65)
    return letterFromNumber(number)
}

// Lets make a word
const makeWord = () => {
    // random number between 3 and 9
    let word = ""
    let wordLength = getRandom(3,15)
    for(let i = 0; i <= wordLength; i ++) {
        // now assign a letter for each of these
        word = word + randomLetter()
    }
    return word
    
}

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


console.log(makeWord())