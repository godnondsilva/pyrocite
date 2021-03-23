import React from "react"
import styled from "styled-components"

const LowerWalletContainer = styled.div`
  width: 100%;
  padding: 150px 0;
  background: #111;

`
const FlexContainer = styled.div`
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
`

const ItemContainer = styled.div`
    width: 300px;
    margin: 30px 10px 10px 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        margin: 0;
        margin-top: 50px;
        width: 320px;
    }
    border-radius: 4px;
    background: #111;
    padding: 30px 4px;
`

const LowerWallet = () => {
  return (
    <LowerWalletContainer>
      <FlexContainer>
        <ItemContainer></ItemContainer>
      </FlexContainer>
    </LowerWalletContainer>
  )
}

export default LowerWallet;