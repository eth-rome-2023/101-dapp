require("dotenv").config();
const fs = require('fs');
const { Web3 } = require('web3');

const filepathContractABI = "./contract/SumValues.abi";

const ethNodeURL = process.env.ETH_NODE_URL;
const contractABI = JSON.parse(fs.readFileSync(filepathContractABI, 'utf8'));
const contractAddress = process.env.CONTRACT_ADDRESS; 
const ethAddress = process.env.ETH_ADDRESS;

const web3 = new Web3(ethNodeURL);
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

