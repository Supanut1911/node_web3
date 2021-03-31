const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("Web3 Provider"));

//generate account
console.log(web3.eth.accounts.create());    
// let acc1 = web3.eth.accounts.create()
// console.log('>>', acc1.address);
// const wallet = web3.eth.accounts.wallet.create(0);
// console.log(wallet);


web3.eth.getBalance(web3.eth.accounts.create().address, function(error, balance) {
    if(!error) {
        console.log( web3.utils.fromWei(balance, 'ether'));
     } else {
         console.log('err');
     }
});
// console.log(">>>>", x);

// // web3.eth.getBlockNumber().then(function(result) {
// //     console.log(result)
// // })
  