import React from "react"
import styled from "styled-components"

const VerifiedContainer = styled.div`
    width: 100%;
    padding: 150px 0;
    display: flex;
    justify-content: center;
    text-align: center;
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


const Verified = () => {
  return (
    <VerifiedContainer>
        <Container>
            <Title>We are distributed</Title>
            <Subtitle>We take pride in the project and community. We want to provide the best experience and platform possible.</Subtitle>
        </Container>
    </VerifiedContainer>
  )
}

export default Verified;