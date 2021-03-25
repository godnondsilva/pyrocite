import React from "react";
import styled from "styled-components";

import Particles from '../components/particles';
import Jumbotron from "../components/jumbotron";
import Services from '../components/services';
import Distribution from '../components/distrbution';
import Verified from '../components/verified';

const Invisible = styled.div`
  display: none;
`

class Home extends React.Component {
  componentWillMmount() {
    var interval = localStorage.getItem('interval')
    clearInterval(interval);
  }

  render() {
    return (
      <>
          <Particles />
          <Jumbotron />
          <Services />
          <Distribution />
          <Verified />
          <Invisible id="tokenBalance" />
          <Invisible id="totalCirculating" />
          <Invisible id="totalStakedPYROC" />
          <Invisible id="totalFrozenAmount" />
          <Invisible id="stakeAmount" />
          <Invisible id="unstakeAmount" />
          <Invisible id="dividendsAmount" />
          <Invisible id="addressTransfer" />
          <Invisible id="amountToSend" />
      </>
    )
  }
}

export default Home;