import React from "react"
import styled from "styled-components"

import { stakeAmount, UnstakeAmount, withdrawButton, transferToken } from "../data/web3.data";

const LowerWalletContainer = styled.div`
  width: 100%;
  padding: 0 0 50px 0;
  background: #111;

`
const FlexContainer = styled.div`
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
`

const ItemContainer = styled.div`
  margin: 30px 10px 10px 10px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media (max-width: 768px) {
      margin: 0;
      margin-top: 50px;
      width: 320px;
  }
  border-radius: 4px;
  background: #111;
  padding: 30px 4px;
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 400;
  padding-bottom: ${(props) => props.dividends ? '10px' : ''};
  border-bottom: ${(props) => props.dividends ? '1px solid rgba(255,255,255,0.2)' : ''};
`

const Subtitle = styled.div`
  margin-bottom: 15px;
  font-size: 1.1rem;
  color: #fd3708;
  font-weight: 600;
`

const InputField = styled.input`
  width: 450px;
  height: 30px;
  color: #ddd;
  outline: none;
  border: none;
  background-color: #090909;
  border: 1px solid rgba(255,255,255,0.1);
  margin-bottom: 15px;
  padding: 15px;

  @media (max-width: 768px) {
    width: 300px;
  }
`

const Button = styled.span`
  cursor: pointer;
  background: rgb(213,17,17);
  background: linear-gradient(90deg, rgba(213,17,17,1) 0%, rgba(196,47,10,1) 63%, rgba(196,73,10,1) 100%);
  padding: 10px 0;
  display: flex;
  justify-content: center;
  width: 140px;
  border-radius: 4px;
  transition: all 300ms ease;
  :hover {
    transform: translateY(-5px);
  }
`

const WithdrawButton = styled(Button)`
  width: 300px;
`

const WithdrawItemContainer = styled(ItemContainer)`
  background-color: #090909;
  padding: 40px 40px 40px 40px;
  width: 400px;
`

const WithdrawText = styled.div`
  color: #ddd;
  font-size: 1rem;
  padding-top: 6px;
  opacity: 0.9;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  margin-bottom: 20px;
`

const Text = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding: 10px 0 40px 0;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const LowerWallet = () => {
  return (
    <LowerWalletContainer>
      <FlexContainer>
        <ItemContainer>
          <Title>Stake PYROC</Title>
          <Subtitle>Minimum: 100 Tokens</Subtitle>
          <InputField type="number" min="100" id="stakeAmount" placeholder="Amount of PYROC to Stake"></InputField>
          <Button onClick={stakeAmount}>Stake PYROC</Button>
        </ItemContainer>
        <ItemContainer>
          <Title>Unstake PYROC</Title>
          <Subtitle>10% Unstake fee all distributed to stakers</Subtitle>
          <InputField id="unstakeAmount" placeholder="Amount of PYROC to Unstake"></InputField>
          <Button onClick={UnstakeAmount}>Unstake PYROC</Button>
        </ItemContainer>
      </FlexContainer>
      <FlexContainer>
        <WithdrawItemContainer>
          <Title dividends={true}>Staked PYROC Dividends</Title>
          <Text id="dividendsAmount">-</Text>
          <WithdrawText>Current PYROC Dividends</WithdrawText>
          <WithdrawButton onClick={withdrawButton}>Withdraw PYROC to Wallet</WithdrawButton>
        </WithdrawItemContainer>
        <ItemContainer>
          <Title>Transfer PYROC</Title>
          <Subtitle>10% Burn Rate</Subtitle>
          <InputField id="addressTransfer" placeholder="Receiving PYROC Address"></InputField>
          <InputField id="amountToSend" placeholder="Amount of PYROC to Send"></InputField>
          <Button onClick={transferToken}>Transfer PYROC</Button>
        </ItemContainer>
      </FlexContainer>
    </LowerWalletContainer>
  )
}

export default LowerWallet;