const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("Web3 Provider"));

console.log(web3.eth.accounts.create());    