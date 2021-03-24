import React from "react"

import Particles from '../components/particles';
import Jumbotron from "../components/jumbotron";
import Services from '../components/services';
import Distribution from '../components/distrbution';
import Verified from '../components/verified';
;

class Home extends React.Component {
  componentWillMount() {
  }
  render() {
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
}

export default Home;