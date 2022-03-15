import React from 'react'
import styled from 'styled-components'

export default function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
      </Wrap>

      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
      </Wrap>
    </Container>
  )
}


const Container = styled.div`
  padding: 30px 0px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  grid-gap: 25px;
  width: 100%;
`

const Wrap = styled.div`
  width: 100%;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: 0.2s ease-in-out transform;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &:hover{
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
  }
`