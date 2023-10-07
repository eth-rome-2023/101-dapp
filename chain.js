const { Web3 } = require('web3');
const web3 = new Web3('http://localhost:8545'); // Sostituisci con l'URL di Ganache

web3.eth.net.getId()
    .then((chainId) => {
        console.log('Chain ID:', chainId);
    })
    .catch((error) => {
        console.error('Errore nel recupero del Chain ID:', error);
    });
