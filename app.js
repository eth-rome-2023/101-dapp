// imports
const fs = require('fs');
const { Web3 } = require('web3');

// settings
const filepathContractABI = "./contract/SumValues.abi";

const ethNodeURL = "http://127.0.0.1:8545"
const contractABI = JSON.parse(fs.readFileSync(filepathContractABI, 'utf8'));
const contractAddress = "0x4A194f3Ef572686e953Af0D7d4cd41B5CFE96521"; 
const ethAddress = "0x4A194f3Ef572686e953Af0D7d4cd41B5CFE96521";

// constructor
const web3 = new Web3(ethNodeURL);
// create contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// inputs
const x = 5;
const y = 7;

contract.methods.sumValues(x, y).send({ 
	from: ethAddress})
    .on('transactionHash', (hash) => {
        console.log('Send transaction:', hash);
    })
    .on('receipt', (receipt) => {
        console.log('Confirmed transaction:', receipt);
    })
    .on('error', (error) => {
        console.error('Error transaction:', error);
    });

