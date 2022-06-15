import Web3 from "web3";
import { ethers } from "ethers";

import { ABI, ContractAddress } from "./config";

// const web3 = new Web3(Web3.givenProvider);
// const accounts = web3.eth.getAccounts();

// const smartContract = new web3.eth.Contract(ABI, ContractAddress);

// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum);

// MetaMask requires requesting permission to connect users accounts
provider.send("eth_requestAccounts", []);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner();

const smartContract = new ethers.Contract(ContractAddress, ABI, signer);

export default smartContract;
