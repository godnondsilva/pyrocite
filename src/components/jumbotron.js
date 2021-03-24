import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const JumbotronContainer = styled.div`
  width: 100%;
  padding: 200px 0 0 0;
  display: flex;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
      padding: 200px 0 0 0;
  }
  position: relative;
  z-index: 2;
`

const Container = styled.div`
    max-width: 500px;
    padding: 0 50px;
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

const FlexContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

const GoToWallet = styled(Link)`
  margin: 0 10px;
  color: #ddd;
  text-decoration: none;
  background: rgb(213,17,17);
  background: linear-gradient(90deg, rgba(213,17,17,1) 0%, rgba(196,47,10,1) 63%, rgba(196,73,10,1) 100%);

  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: all ease 200ms;
  :hover {
      transform: translateY(-5px);
  }
`

const LearnMore = styled.a`
  margin: 0 10px;
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid #ddd;
  cursor: pointer;
  text-decoration: none;
  color #ddd;
  transition: all ease 200ms;
  :hover {
      transform: translateY(-5px);
  }
`

const Jumbotron = () => {
  return (
    <JumbotronContainer>
        <Container>
            <Title>Welcome to Pyroclastic!</Title>
            <Subtitle>PYROC is the first variable length deflationary staking platform.</Subtitle>
            <FlexContainer>
                <GoToWallet to="/wallet">Go to Wallet</GoToWallet>
                <LearnMore href="https://exchange.pancakeswap.finance/#/swap">Buy now</LearnMore>
            </FlexContainer>
        </Container>
    </JumbotronContainer>
  )
}

export default Jumbotron;