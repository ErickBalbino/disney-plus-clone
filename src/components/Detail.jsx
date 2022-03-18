import React from 'react'
import styled from 'styled-components'

export default function Detail() {
  return (
    <Container>
      <Background>
        <Image src="/images/background-detail.jpg" alt="" />
      </Background>

      <ImageTitle>
        <img src="/images/viewers-disney.png" alt="" />
      </ImageTitle>

      <Controls>  
        <PlayButton className='button'>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>

        <TrailerButton className='button'>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>

        <AddButton>
          <span>+</span>
        </AddButton>

        <WatchGroupButton>
          <img src="/images/group-icon.png" alt="" />
        </WatchGroupButton>
      </Controls>

      <Subtitle>
        2018 - 7m - Family, Fantasy, Kids, Animation
      </Subtitle>

      <Description>
        A chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
      </Description>
    </Container>
  )
}


const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 10px calc(3.5vw + 5px);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.5;
`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;

  .button{
    display: flex;
    align-items: center;
    padding: 6px 10px;
    margin: 0px 10px;
    height: 45px;
    outline: transparent;
    cursor: pointer;
    font-size: 0.9rem;
    text-transform: uppercase;
  }

  img{
    width: 25px;
    margin: 0px 4px;
  }

  span{
    letter-spacing: 1.5px;
  }
`

const PlayButton = styled.button`
  transition: 0.2s ease-in-out background-color;
  border: 2px solid transparent;
  border-radius: 3px;

  &:hover{
    background-color: rgb(198, 198, 198);
  }
`

const TrailerButton = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: 1px solid #eee;
  border-radius: 3px;
  transition: 0.2s ease-in-out background-color;

  &:hover{
    background-color: rgba(0, 0, 0, 0.4);
  }
`

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #eee;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  outline: transparent;
  margin-left: 5px;
  cursor: pointer;

  span{
    color: #fff;
    font-size: 1.6rem;
  }
`

const WatchGroupButton = styled(AddButton)`
  margin-left: 10px;
`

const Subtitle = styled.div`
  padding: 15px 10px;
  color: #eee;
  font-size: 0.95rem;
`

const Description = styled(Subtitle)`
  line-height: 1.5;
  font-size: 1.05rem;
`