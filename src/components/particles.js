import React, { Component } from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import particlesData from "../data/particles.data";

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

class Canvas extends Component {
  state = { 
      width: "0px", 
      height: "0px" 
  };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`
    });
  };
  
  render() {
    return (
    <Bg>
      <Particles
        {...this.state}
        params={particlesData}
      />
      </Bg>
    );
  }
}

export default Canvas;
