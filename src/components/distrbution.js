import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SocialLinks from "../data/social-links.data";

import mapImage from "../assets/map.svg";

const DistributionContainer = styled.div`
  width: 100%;
  padding: 150px 0;
  display: flex;
  position: relative;
  z-index: 5;
  justify-content: center;
  text-align: center;
  background: rgb(213,17,17);
  background: linear-gradient(90deg, rgba(213,17,17,1) 0%, rgba(196,47,10,1) 63%, rgba(196,73,10,1) 100%);
`

const Container = styled.div`
    max-width: 500px;
    padding: 0 50px;
`

const IconContainer = styled.div`
`

const IconData = styled.a`
  margin: 15px;
  text-decoration: none;
`

const FontAwesomeIconContainer = styled(FontAwesomeIcon)`
  color: #ddd;
  transform: translateY(2px);
  transition: all ease 200ms;
:hover {
    transform: translateY(-5px);
}
`

const Title = styled.div`
  padding-top: 20px;
  font-size: 2.5rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.div`
  color: #ddd;
  font-size: 1.25rem;
  padding-top: 6px;
  opacity: 0.9;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const MapImage = styled.img`
  position: absolute;
  transform: translateX(-60px);
`

const Distribution = () => {
  return (
    <DistributionContainer id="distribution">
        <MapImage src={mapImage} />
        <Container>
            <IconContainer>
                <IconData href={SocialLinks.Discord}>
                    <FontAwesomeIconContainer icon={["fab", "discord"]} size="3x" />
                </IconData>
                <IconData href={SocialLinks.Telegram}>
                    <FontAwesomeIconContainer icon={["fab", "telegram"]} size="3x" />
                </IconData>
            </IconContainer>
            <Title>We are distributed</Title>
            <Subtitle>We take pride in the project and community. We want to provide the best experience and platform possible.</Subtitle>
        </Container>
    </DistributionContainer>
  )
}

export default Distribution;