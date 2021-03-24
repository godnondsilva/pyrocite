import React from "react"
import styled from "styled-components"

import Pyroc from "../assets/pyroc.png"

const FooterContainer = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.1);
    background-color: #090909;
`

const Container = styled.div`
    max-width: 500px;
    padding: 0 50px;
`

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ccc;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Subtitle = styled.div`
  color: #aaa;
  font-size: 0.8rem;
  opacity: 0.9;
`

const Color = styled.span`
  color: #fd3708;
`

const Image = styled.img`
  width: 30px;
  height: 30px;
`

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
`

const Footer = () => {
  return (
    <FooterContainer>
        <Container>
          <BottomContainer>
            <Image src={Pyroc} />
            <Title>PYROC</Title>
          </BottomContainer>
          <Subtitle>&copy; 2021 <Color>&hearts;</Color> PYROC</Subtitle>
        </Container>
    </FooterContainer>
  )
}

export default Footer;