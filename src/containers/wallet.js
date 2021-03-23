import React from "react"

import UpperWallet from "../components/upper-wallet"
import LowerWallet from "../components/lower-wallet"

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.loadWeb3 = this.props.loadWeb3.bind(this)
  }

  componentWillMount() {
    this.props.loadWeb3()
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