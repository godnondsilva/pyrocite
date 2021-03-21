import React from "react"
import styled from "styled-components"

import PyrocIcons from "../assets/pyroc_icons.png";
import Rocket from "../assets/rocket.png"
import Dex from "../assets/dex.png"
import Up from "../assets/up.png"
import Airdrop from "../assets/airdrop.png"
import Roadmap from "../assets/roadmap.png"

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
    margin: 20px 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const Image = styled.img`
    width: 70px;
    height: 70px;
`

const Service = () => {
  return (
    <ServicesContainer>
        <Container>
            <ItemContainer>
                <Image src={PyrocIcons} />
                <Title>Staking Earnings</Title>
                <Subtitle>Holders earn rewards generated through network activity and can reedeem or stake their new PYROC.</Subtitle>
            </ItemContainer>
            <ItemContainer>
                <Image src={Rocket} />
                <Title>Built for Value</Title>
                <Subtitle>PYROC is a token with the added utility of being both transparently staked and burned at a 10% rate.</Subtitle>
            </ItemContainer>
            <ItemContainer>
                <Image src={Dex} />
                <Title>PYROC Dex</Title>
                <Subtitle>The decentralized exchange operates via the Binance Smart Chain to facilitate safe and secure transactions.</Subtitle>
            </ItemContainer>
            <ItemContainer>
                <Image src={Up} />
                <Title>dApp Development</Title>
                <Subtitle>A series of Web 3.0 dApps can utilize PYROC Tokens. Developers are welcome to build upon the infrastructure.</Subtitle>
            </ItemContainer>
            <ItemContainer>
                <Image src={Airdrop} />
                <Title>Stake Drops</Title>
                <Subtitle>PYROC will be partially distributed via a series of drops via Discord, Telegram and Twitter and community events.</Subtitle>
            </ItemContainer>
            <ItemContainer>
                <Image src={Roadmap} />
                <Title>Roadmap</Title>
                <Subtitle>As PYROC grows, be on the lookout for updates to the roadmap regarding the progression of the project.</Subtitle>
            </ItemContainer>
        </Container>
    </ServicesContainer>
  )
}

export default Service;