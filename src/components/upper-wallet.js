import React from "react"
import styled from "styled-components"

import Pyroc from "../assets/pyroc.png"

const UpperWalletContainer = styled.div`
  width: 100%;
  padding: 150px 0 50px 0;
`

const InnerUpperContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
      flex-direction: column;
      align-items:center;
  }
`

const LeftContainer = styled.div`
    max-width: 1000px;
    padding: 0 150px 0 0;
    @media (max-width: 968px) {
        padding: 0 50px;
    }
    @media (max-width: 368px) {
        padding: 0 20px;
    }
`

const RightContainer = styled.div`
    max-width: 300px;
    padding: 40px 30px 40px 30px;
    width: 250px;
    height: 100px;
    background: rgb(213,17,17);
    display: flex;
    border-radius: 4px;
    background: linear-gradient(90deg, rgba(213,17,17,1) 0%, rgba(196,47,10,1) 63%, rgba(196,73,10,1) 100%);
    @media (max-width: 968px) {
        width: 200px;
        margin-right: 40px;
    }
    @media (max-width: 768px) {
        width: 280px;
        margin-top: 50px;
        margin-right: 0;
        padding: 20px;
    }
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.div`
  color: #ddd;
  font-size: 1.1rem;
  padding-top: 6px;
  opacity: 0.9;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const Contract = styled.div`
  color: #ddd;
  font-size: 1.1rem;
  padding-top: 30px;
  opacity: 0.9;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const ContractAddress = styled.div`
  color: #fd3708;
  font-size: 1rem;
  font-weight: 600;
  padding-top: 6px;
  opacity: 0.9;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

const RightTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  // border-bottom: 1px solid rgba(255,255,255,0.2);
  // padding-bottom: 10px;
  padding-top: 10px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const RightSubtitle = styled.div`
  color: #ddd;
  font-size: 1.25rem;
  padding-top: 10px;
  opacity: 0.9;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
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

const Image = styled.img`
  width: 60px;
  height: 60px;
  transform: scale(0.8);
`

const ImageContainer = styled.span`
  background-color: #090909;
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 50%;
`

const RightImage = styled.img`
  width: 100px;
  height: 100px;
  transform: scale(0.8);
`

const RightImageContainer = styled.span`
  background-color: #090909;
  width: 100px;
  height: 100px;
  margin-right: 15px;
  border-radius: 50%;
`

const UpperWallet = () => {
  return (
    <UpperWalletContainer>
        <InnerUpperContainer>
            <LeftContainer>
                <Title>Your PYROC Wallet</Title>
                <Subtitle>Manage your current holdings and stake to earn more PYROC</Subtitle>
                <Contract>Verified PYROC Contract:</Contract>
                <ContractAddress>0xd0f6e96abfe9d41ee104a72b8f51f4ffaa90d378</ContractAddress>          
            </LeftContainer>
            <RightContainer>
                <RightImageContainer>
                  <RightImage src={Pyroc} />
                </RightImageContainer>
                <div>
                  <RightTitle>PYROC Tokens</RightTitle>
                  <RightSubtitle id="tokenBalance">-</RightSubtitle>
                </div>
            </RightContainer>
        </InnerUpperContainer>
        <FlexContainer>
            <ItemContainer>
              <ImageContainer>
                <Image src={Pyroc} />
              </ImageContainer>
                <div>
                  <Title id="totalCirculating">-</Title>
                  <Subtitle>Circulating PYROC</Subtitle>
                </div>
            </ItemContainer>
            <ItemContainer>
              <ImageContainer>
                <Image src={Pyroc} />
              </ImageContainer>
                <div>
                  <Title id="totalStakedPYROC">-</Title>
                  <Subtitle>Total Staked PYROC</Subtitle>
                </div>
            </ItemContainer>
            <ItemContainer>
              <ImageContainer>
                <Image src={Pyroc} />
              </ImageContainer>
              <div>
                <Title id="totalFrozenAmount">-</Title>
                <Subtitle>Your Staked PYROC</Subtitle>
              </div>
            </ItemContainer>
        </FlexContainer>
    </UpperWalletContainer>
  )
}

export default UpperWallet;