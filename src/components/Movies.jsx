import React from 'react'
import styled from 'styled-components'

export default function Movies() {
  return (
    <Container>
        <h4>Recommended for You</h4>

        <Content>
            <Wrap>
                <img src="/images/simpsons.jpeg" alt="filmes recomendado" />
            </Wrap>

            <Wrap>
                <img src="/images/simpsons.jpeg" alt="filmes recomendado" />
            </Wrap>

            <Wrap>
                <img src="/images/simpsons.jpeg" alt="filmes recomendado" />
            </Wrap>

            <Wrap>
                <img src="/images/simpsons.jpeg" alt="filmes recomendado" />
            </Wrap>
        </Content>
    </Container>
  )
}

const Container = styled.div`
    padding-top: 20px;
    h4{
        font-size: 1.1rem;
        font-weight: 500;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    grid-gap: 25px;
    padding: 20px 0px;
`

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: 0.2s ease-in-out transform;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
    
    }

    &:hover{
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
    }
`