import React from "react"

import UpperWallet from "../components/upper-wallet"
import LowerWallet from "../components/lower-wallet"

import { loadWeb3 } from "../data/web3.data";

class Wallet extends React.Component {
  componentWillMount() {
    loadWeb3();
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