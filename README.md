# Port-Script
This is a script for triggering an api endpoint periodically to generate synthetic logs

## TOOLS
- Javascript
- Axios

## To Run
Running this will send a new random word to the endpoint every 5 seconds
- Start the local server PORT-BACK-END on port 3000
- Navigate to the root folder of this directory
- Run the following command:
    `node request_script.js`
- To Stop
    Command C

## Make an external call to an ip address
- Currently getting
    `Error: connect ECONNREFUSED 192.168.0.105:3000`
    possible firewall issue?

## Setup
- `npm init -y` (added the data from this readme to the package.json file)
- `npm install axios`

