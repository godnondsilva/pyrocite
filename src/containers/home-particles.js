import React from "react"

import styled from "styled-components"

import Jumbotron from "../components/jumbotron";
import Services from '../components/services';

import Particles from '../data/particles.data';

const Bg = styled.div`
    position: absolute;
  z-index: 1;
  #tsparticles {
      .tsparticles-canvas-el {
          max-width: 100% !important;
          height: 1400px !important;
      }
  }
`

const HomeParticles = () => {
  return (
    <>
        <Bg>
            <Particles />
        </Bg>
        <Jumbotron />
        <Services />
    </>
  )
}

export default HomeParticles;