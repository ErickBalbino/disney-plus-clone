import React, { useEffect } from 'react'
import styled from 'styled-components'

import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'

import db from '../firebase'
import { query, onSnapshot, collection } from "firebase/firestore";

export default function Home() {

  useEffect(() => {
    const q = query(collection(db, "movies"))
    onSnapshot(q, (snap) => {
      console.log(snap)
    })
  })

  return (
    <Container>
      <ImgSlider />

      <Viewers />

      <Movies />
    </Container>
  )
}


const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  &::before{
    position: absolute;
    background-image: url('/images/home-background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`