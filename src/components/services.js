import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ServicesContainer = styled.div`
    width: 100%;
    padding: 200px 0 100px 0;
    display: flex;
    justify-content: center;
    text-align: center;
    @media (max-width: 768px) {
        padding: 150px 0 200px 0;
    }
`

const Container = styled.div`
    width: 1200px;
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
`

const ItemContainer = styled.div`
    width: 300px;
    margin: 0 50px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        margin: 0;
        margin-top: 50px;
    }
`

const Title = styled.div`
  padding-top: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.div`
  color: #ddd;
  font-size: 1rem;
  padding-top: 6px;
  opacity: 0.9;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const FontAwesomeIconContainer = styled(FontAwesomeIcon)`
    color: #fd7d08;
`

const Service = () => {
  return (
    <ServicesContainer>
        <Container>
            <ItemContainer>
                <FontAwesomeIconContainer icon={["fab", "telegram"]} size="3x" />
                <Title>Staking Earnings</Title>
                <Subtitle>Holders earn rewards generated through network activity and can reedeem or stake their new PYROC.</Subtitle>
            </ItemContainer>
            <ItemContainer>
                <FontAwesomeIconContainer icon={["fab", "discord"]} size="3x" />
                <Title>Built for Value</Title>
                <Subtitle>PYROC is a token with the added utility of being both transparently staked and burned at a 10% rate.</Subtitle>
            </ItemContainer>
            <ItemContainer>
                <FontAwesomeIconContainer icon={["fab", "telegram"]} size="3x" />
                <Title>PYROC Dex</Title>
                <Subtitle>The decentralized exchange operates via the Ethereum blockchain to facilitate safe and secure transactions.</Subtitle>
            </ItemContainer>
            <ItemContainer>
                <FontAwesomeIconContainer icon={["fab", "discord"]} size="3x" />
                <Title>dApp Development</Title>
                <Subtitle>A series of Web 3.0 dApps can utilize PYROC Tokens. Developers are welcome to build upon the infrastructure.</Subtitle>
            </ItemContainer>
            <ItemContainer>
                <FontAwesomeIconContainer icon={["fab", "telegram"]} size="3x" />
                <Title>Stake Drops</Title>
                <Subtitle>PYROC will be partially distributed via a series of drops via Discord, Telegram and Twitter and community events.</Subtitle>
            </ItemContainer>
            <ItemContainer>
                <FontAwesomeIconContainer icon={["fab", "discord"]} size="3x" />
                <Title>Roadmap</Title>
                <Subtitle>As PYROC grows, be on the lookout for updates to the roadmap regarding the progression of the project.</Subtitle>
            </ItemContainer>
        </Container>
    </ServicesContainer>
  )
}

export default Service;