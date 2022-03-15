import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" alt="logo disney" />

        <NavMenu>
            <Link to="/">
                <img src="/images/home-icon.svg" alt="icone home" />
                <span>HOME</span>
            </Link>

            <Link to="/search">
                <img src="/images/search-icon.svg" alt="icone home" />
                <span>SEARCH</span>
            </Link>

            <Link to="/watchlist">
                <img src="/images/watchlist-icon.svg" alt="icone home" />
                <span>WATCHLIST</span>
            </Link>

            <Link to="/originals">
                <img src="/images/original-icon.svg" alt="icone home" />
                <span>ORIGINALS</span>
            </Link>

            <Link to="/movies">
                <img src="/images/movie-icon.svg" alt="icone home" />
                <span>MOVIES</span>
            </Link>

            <Link to="/series">
                <img src="/images/series-icon.svg" alt="icone home" />
                <span>SERIES</span>
            </Link>
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
            margin: 0px 5px;
            position: relative;

            &::after{
                content: "";
                height: 2px;
                background-color: #fff;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -8px;
                opacity: 0;
                transform: scaleX(0);
                transform-origin: left center;
                transition: 0.4s ease-in-out transform;
            }
        }

        &:hover{
            span:after{
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`



const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`