import React from "react"
import styled from "styled-components"

const JumbotronContainer = styled.div`
    width: 100%;
    padding: 200px 0 50px 0;
    display: flex;
    justify-content: center;
    text-align: center;
    @media (max-width: 768px) {
        padding: 200px 0 0 0;
    }
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

const GoToWallet = styled.div`
margin: 0 10px;
background: rgb(163,0,0);
background: linear-gradient(70deg, rgba(163,0,0,0.9) 0%, rgba(253,125,8,0.9) 100%);

padding: 10px 15px;
border-radius: 4px;
cursor: pointer;
transition: all ease 200ms;
:hover {
    transform: translateY(-5px);
}
`

const LearnMore = styled.div`
margin: 0 10px;
padding: 10px 15px;
border-radius: 4px;
border: 1px solid #ddd;
cursor: pointer;
transition: all ease 200ms;
:hover {
    transform: translateY(-5px);
}
`

const Jumbotron = () => {
  return (
    <JumbotronContainer>
        <Container>
            <Title>Welcome to Pyrocite!</Title>
            <Subtitle>PYROC is the first variable length deflationary staking platform.</Subtitle>
            <FlexContainer>
                <GoToWallet>Go to wallet</GoToWallet>
                <LearnMore>Learn More</LearnMore>
            </FlexContainer>
        </Container>
    </JumbotronContainer>
  )
}

export default Jumbotron;