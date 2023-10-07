require("dotenv").config();
const { Web3 } = require('web3');
const ethNodeURL = process.env.ETH_NODE_URL;

const web3 = new Web3(ethNodeURL);

web3.eth.net.getId()
    .then((chainId) => {
        console.log('Chain ID:', chainId);
    })
    .catch((error) => {
        console.error('Errore nel recupero del Chain ID:', error);
    });
