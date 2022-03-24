import React from 'react'
import styled from 'styled-components'

export default function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />

        <SingUpButton>
          GET ALL THERE
        </SingUpButton>

        <Description>
          Get premier acess to Raya and The Last Dragon for an additional fee with a Disney + subscription. As of 03/26/21, the price of Disney+ and the Disney Bundle will increase $1.
        </Description>

        <CTALogoTwo src="/images/cta-logo-two.png"  />
      </CTA>
    </Container>
  )
}


const Container = styled.div` 
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;

  &::before{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: "";
    background-image: url('/images/login-background.jpg');
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.7;
  }
`


const CTA = styled.div`
  width: 60vw;
  padding: 80px 40px;

  @media (max-width: 768px) {
    width: 97vw;
  }
`

const CTALogoOne = styled.img`
`


const SingUpButton = styled.button`
  width: 100%;
  background-color: #0063e5;
  border: transparent;
  border-radius: 5px;
  outline: transparent;
  height: 50px;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #f9f9f9;
  margin: 20px 0px;
  cursor: pointer;
  transition: 0.2s ease-in-out background-color;

  &:hover{
    background-color: #0483ee;
  }
`


const Description = styled.p`
  width: 100%;
  text-align: center;
  font-size: 0.85rem;
  letter-spacing: 1.4px;
  line-height: 1.5;
`


const CTALogoTwo = styled.img`
  width: 80%;
  padding: 20px 0px;
  display: flex;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`