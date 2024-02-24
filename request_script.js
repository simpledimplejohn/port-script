// This script sends a request repeatedly to an endpoint

const axios = require('axios');

const sendPostRequest = async () => {
    const url = 'http://localhost:3000/log'
    const data = {
        "word" : "bojato"
    }
    const headers = {
        'Content-Type': 'application/json'
    }

    try {
        const response = await axios.post(url, data, { headers });
        console.log(`Status Code: ${response.status}, Response: ${reqponse.data}`);
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

// now run this ever 30 seconds

setInterval(sendPostRequest, 5000);