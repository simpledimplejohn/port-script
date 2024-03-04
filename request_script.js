// This script sends a request repeatedly to an endpoint
const axios = require('axios');

// Functions to generate a random word part 1
// this takes a number and returns a letter
const letterFromNumber = (number) => {
    letter = String.fromCharCode(number)
    return letter
}
const randomLetter = () => { // letters are 1 - 24
    let number = Math.floor(Math.random() * (90 - 65) + 65)
    return letterFromNumber(number)
}

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
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

const sendPostRequest = async () => {
    let word = makeWord()

    let append = ", server : port-script-ec2"
    word = ": " + word + append;

    const url = 'http://34.227.225.227:3000/log' // pi server ip
    const data = {
        "word" : `${word}`
    }
    const headers = {
        'Content-Type': 'application/json'
    }

    try {
        const response = await axios.post(url, data, { headers });
        console.log(`Status Code: ${response.status}, Response: ${response.data}`);
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

// now run this ever 5 seconds

setInterval(sendPostRequest, 5000);