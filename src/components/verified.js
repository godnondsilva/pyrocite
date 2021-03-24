import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

library.add(faCheckCircle)

const VerifiedContainer = styled.div`
  width: 100%;
  padding: 100px 0;
  display: flex;
  justify-content: center;
`

const FlexContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
`

const ItemContainer = styled.div`
  width: 300px;
  height: 380px;
  margin: 0 100px;
  @media (max-width: 768px) {
    width: 250px;
    margin: 0 40px;
    padding: 20px 40px;
    margin-top: 50px;
  }
  background: #111;
  padding: 20px 40px;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  border-bottom: ${(props) => props.newspaper ? '1px solid rgba(255,255,255,0.1)' : ''};
  padding-bottom: ${(props) => props.newspaper ? '20px' : ''};
  margin-bottom: ${(props) => props.newspaper ? '20px' : ''};
  border-radius: 4px;
`

const Subtitle = styled.div`
  margin-bottom: 15px;
  font-size: 1.1rem;
  color: #ddd;
  opacity: 0.9;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Button = styled.a`
  cursor: pointer;
  background: rgb(213,17,17);
  background: linear-gradient(90deg, rgba(213,17,17,1) 0%, rgba(196,47,10,1) 63%, rgba(196,73,10,1) 100%);
  display: flex;
  justify-content: center;
  width: 140px;
  border-radius: 4px;
  transition: all 300ms ease;
  :hover {
    transform: translateY(-5px);
  }
  text-decoration: none;
  color: #ddd;
  margin-top: ${(props) => props.whitepaper ? '20px' : ''};
  padding: ${(props) => props.whitepaper ? '10px 60px' : '10px 0'};
  margin-left: ${(props) => props.whitepaper ? '10px' : ''};
`

const LeftContainer = styled.div`
  width: 400px;
  margin: 0 100px;
  @media (max-width: 768px) {
    width: 300px;
    margin: 0 50px;
  }
`

const FontAwesomeIconContainer = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
`

const Verified = () => {
  return (
    <VerifiedContainer>
      <FlexContainer>
        <LeftContainer>
          <Title>PYROC is Verified.</Title>
          <Subtitle>Below is the verified smart contract on Etherscan. PYROC code has been audited and can only use the functions found within the contract.</Subtitle>
          <Button href="https://bscscan.com/">Smart Contract</Button>
        </LeftContainer>
        <ItemContainer>
          <Title newspaper={true}>Newspaper</Title>
          <Subtitle>
            <FontAwesomeIconContainer icon={["fas", "check-circle"]} size="2x" />
            General Functionality
          </Subtitle>
          <Subtitle>
            <FontAwesomeIconContainer icon={["fas", "check-circle"]} size="2x" />
            Benefits of PYROC
          </Subtitle>
          <Subtitle>
            <FontAwesomeIconContainer icon={["fas", "check-circle"]} size="2x" />
            Smart Contract Functions
          </Subtitle>
          <Subtitle>
            <FontAwesomeIconContainer icon={["fas", "check-circle"]} size="2x" />
            Simplicity and Accessibility
          </Subtitle>
          <Subtitle>
            <FontAwesomeIconContainer icon={["fas", "check-circle"]} size="2x" />
            Anonymous, Global & Secure
          </Subtitle>
          <Subtitle>
            <FontAwesomeIconContainer icon={["fas", "check-circle"]} size="2x" />
            Further Development
          </Subtitle>
          <Button whitepaper={true} href="https://bscscan.com/">Whitepaper</Button>
        </ItemContainer>
      </FlexContainer>
    </VerifiedContainer>
  )
}

export default Verified;