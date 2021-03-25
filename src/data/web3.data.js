import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || 'https://localhost:8545');
var contract;
var personalAccount;

export async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        document.getElementById("button-change").innerHTML = "Connected";
        // Acccounts now exposed
        web3.eth.sendTransaction({
          /* ... */
        });
      } catch (error) {
        // User denied account access...
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      // Acccounts always exposed
      web3.eth.sendTransaction({
        /* ... */
      });
    }
    // Non-dapp browsers...
    else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }

    
  await web3.eth.getAccounts(function (err, accounts) {
    if (err != null) {
      alert("Error retrieving accounts. You need MetaMask to load your wallet.");
      return;
    }
    if (accounts.length === 0) {
      // alert(
      //   "No account found! Make sure the Ethereum client is configured properly."
      // );
      return;
    }
    var account = accounts[0].toLowerCase();
    console.log("Account: 1 " + account);
    web3.eth.defaultAccount = account;

    window.onload = getData()
  });
}

export async function getData() {
    var abi = [
      {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "tokens",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "tokens",
            type: "uint256",
          },
        ],
        name: "Burn",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "tokens",
            type: "uint256",
          },
        ],
        name: "Collect",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "tokens",
            type: "uint256",
          },
        ],
        name: "Freeze",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "from", type: "address" },
          { indexed: true, internalType: "address", name: "to", type: "address" },
          {
            indexed: false,
            internalType: "uint256",
            name: "tokens",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "tokens",
            type: "uint256",
          },
        ],
        name: "Unfreeze",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "user", type: "address" },
          { indexed: false, internalType: "bool", name: "status", type: "bool" },
        ],
        name: "Whitelist",
        type: "event",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "_user", type: "address" }],
        name: "allInfoFor",
        outputs: [
          { internalType: "uint256", name: "totalTokenSupply", type: "uint256" },
          { internalType: "uint256", name: "totalTokensFrozen", type: "uint256" },
          { internalType: "uint256", name: "userBalance", type: "uint256" },
          { internalType: "uint256", name: "userFrozen", type: "uint256" },
          { internalType: "uint256", name: "userDividends", type: "uint256" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { internalType: "address", name: "_user", type: "address" },
          { internalType: "address", name: "_spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "_spender", type: "address" },
          { internalType: "uint256", name: "_tokens", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "_user", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address[]", name: "_receivers", type: "address[]" },
          { internalType: "uint256[]", name: "_amounts", type: "uint256[]" },
        ],
        name: "bulkTransfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "uint256", name: "_tokens", type: "uint256" }],
        name: "burn",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "collect",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "uint256", name: "_tokens", type: "uint256" }],
        name: "distribute",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "_user", type: "address" }],
        name: "dividendsOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "uint256", name: "_tokens", type: "uint256" }],
        name: "freeze",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "_user", type: "address" }],
        name: "frozenOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ internalType: "address", name: "_user", type: "address" }],
        name: "isWhitelisted",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalFrozen",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "_to", type: "address" },
          { internalType: "uint256", name: "_tokens", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "_to", type: "address" },
          { internalType: "uint256", name: "_tokens", type: "uint256" },
          { internalType: "bytes", name: "_data", type: "bytes" },
        ],
        name: "transferAndCall",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "_from", type: "address" },
          { internalType: "address", name: "_to", type: "address" },
          { internalType: "uint256", name: "_tokens", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ internalType: "uint256", name: "_tokens", type: "uint256" }],
        name: "unfreeze",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { internalType: "address", name: "_user", type: "address" },
          { internalType: "bool", name: "_status", type: "bool" },
        ],
        name: "whitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    // document.getElementById("btnchange").setAttribute("id", "locktokens");
    var tokenAmount;
    var contractAddress = "0xd0F6E96aBfE9D41EE104A72B8F51F4ffaA90d378";
    contract = new web3.eth.Contract(abi, contractAddress);
    personalAccount = web3.eth.personal.defaultAccount;
    contract.methods.balanceOf(personalAccount).call({ from: personalAccount}).then(function(e){
      if (e) {
         tokenAmount = e/1000000;
        tokenAmount = tokenAmount/1000000;
        tokenAmount = tokenAmount/1000000;
        tokenAmount = tokenAmount.toFixed(0)
        console.log(tokenAmount + "Token Amount");
        document.getElementById("tokenBalance").innerHTML = tokenAmount;
        // document.getElementById("totalValue").innerHTML = tokenAmount * 0.007 + "$";
      }
    })
  
    contract.methods.frozenOf(personalAccount).call({from:personalAccount}).then(function(e){
      if(e){
        var totalFrozen = e/1000000;
        totalFrozen = totalFrozen/1000000;
        totalFrozen = totalFrozen/1000000;
        document.getElementById("totalFrozenAmount").innerHTML = totalFrozen.toFixed(0);
      }
    })
    contract.methods.totalFrozen().call({from:personalAccount}).then(function(e){
      if(e){
        var totalFrozen = e/1000000;
        totalFrozen = totalFrozen/1000000;
        totalFrozen = totalFrozen/1000000;
        document.getElementById("totalStakedPYROC").innerHTML = totalFrozen.toFixed(0);
      }
    })
    contract.methods.totalSupply().call({from:personalAccount}).then(function(e){
      if(e){
        var totalFrozen = e/1000000;
        totalFrozen = totalFrozen/1000000;
        totalFrozen = totalFrozen/1000000;
        document.getElementById("totalCirculating").innerHTML = totalFrozen.toFixed(0);
      }
    })
    contract.methods.dividendsOf(personalAccount).call({from: personalAccount, gas: 210000}).then(function(e){
      if (e) {
          var stakeTokenClaim = e/1000000;
          stakeTokenClaim = stakeTokenClaim/1000000;
          stakeTokenClaim = stakeTokenClaim/1000000;
        document.getElementById("dividendsAmount").innerHTML = stakeTokenClaim.toFixed(0);
      }
    })
  
}

export function stakeAmount(){
    var stakeAmount = document.getElementById("stakeAmount").value;
    if(stakeAmount.length <= 2) {
        return alert("Minimum tokens has to be 100")
    }
    console.log(stakeAmount);
    contract.methods.freeze(web3.utils.toWei(stakeAmount)).send({from: personalAccount}).then(function(tx){
      if(tx){
        alert("Successfully Staked!\nTransaction Hash: " + tx.transactionHash);
      }
    }).catch((err)=>{
      alert("Transaction Failed!")
    })
}

export function UnstakeAmount(){
    var unStakeAmount = document.getElementById("unstakeAmount").value;
    if(unStakeAmount.length === 0) {
        return alert("Please enter an amount!")
    }
    contract.methods.unfreeze(web3.utils.toWei(unStakeAmount)).send({from: personalAccount}).then(function(tx){
      if(tx){
          alert("Successfully Unstaked!\nTransaction Hash: " + tx.transactionHash);
          console.log('tx is', tx.transactionHash)
      }
    }).catch((err)=>{
        alert("Transaction Failed!")
    })
}

export function withdrawButton(){
    contract.methods.collect().send({from: personalAccount}).then(function(e){
    if(e){
        alert("Your dividend(s) have been successfully collected!");
    }})
}

export function transferToken(){
    var addresstoSend = document.getElementById("addressTransfer").value;
    var amountToSend = document.getElementById("amountToSend").value;
    if(addresstoSend.length === 0 || amountToSend.length === 0) {
        return alert("Please enter a value!")
    }
    console.log(stakeAmount);
    contract.methods.transfer(addresstoSend, web3.utils.toWei(amountToSend) ).send({from: personalAccount}).then(function(tx){
    if(tx){
        alert("Successfully Transfered!\nTransaction Hash: " + tx.transactionHash);
    }
    }).catch((err)=>{
        alert("Transaction Failed!")
    })
}