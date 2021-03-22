import React from "react"

import Particles from '../components/particles';
import Jumbotron from "../components/jumbotron";
import Services from '../components/services';
import Distribution from '../components/distrbution';
import Verified from '../components/verified';

const Home = () => {
  return (
    <>
        <Particles />
        <Jumbotron />
        <Services />
        <Distribution />
        <Verified />
    </>
  )
}

export default Home;