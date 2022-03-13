import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" alt="logo disney" />

        <NavMenu>
            <a href="#">
                <img src="/images/home-icon.svg" alt="icone home" />
                <span>HOME</span>
            </a>

            <a href="#">
                <img src="/images/search-icon.svg" alt="icone home" />
                <span>SEARCH</span>
            </a>

            <a href="#">
                <img src="/images/watchlist-icon.svg" alt="icone home" />
                <span>WATCHLIST</span>
            </a>

            <a href="#">
                <img src="/images/home-icon.svg" alt="icone home" />
                <span>HOME</span>
            </a>

            <a href="#">
                <img src="/images/original-icon.svg" alt="icone home" />
                <span>ORIGINALS</span>
            </a>

            <a href="#">
                <img src="/images/movie-icon.svg" alt="icone home" />
                <span>MOVIES</span>
            </a>

            <a href="#">
                <img src="/images/series-icon.svg" alt="icone home" />
                <span>SERIES</span>
            </a>
        </NavMenu>
        
        <UserImg src="/images/coder.png" />
    </Nav>
  )
}


const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 36px;
`


const Logo = styled.img`
    width: 80px;
`


const NavMenu = styled.div`
    display: flex;
    align-items: center;

    a{
        display: flex;
        align-items: center;
        padding: 0px 12px;

        img{
            width: 20px;
        }

        span{
            font-size: 0.8rem;
            letter-spacing: 1.02px;
            color: #fff;
            text-transform: uppercase;
            padding: 0px 5px;
        }
    }
`



const UserImg = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
`