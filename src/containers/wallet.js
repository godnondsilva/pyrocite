import React from "react"

import UpperWallet from "../components/upper-wallet"
import LowerWallet from "../components/lower-wallet"

import { loadWeb3, getData } from "../data/web3.data";

class Wallet extends React.Component {
  componentWillMount() {
    loadWeb3();
    var interval = setInterval(getData, 5000);
    localStorage.setItem('interval', interval)
  }

  componentWillUnmount() {
    var interval = localStorage.getItem('interval')
    clearInterval(interval);
  }

  render() {
  return (
    <>
        <UpperWallet />
        <LowerWallet />
    </>
  )
  }
}

export default Wallet;