import React from 'react'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import {FaBars} from 'react-icons/fa'

function Header() {
    return (
        <>
            <HeaderDiv>
                <HeaderContainer>
                    <HeaderLogo to='/'>dolla</HeaderLogo>
                    <MobileIcon>
                        <faBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </HeaderContainer>
            </HeaderDiv>
        </>
    )
}

export default Header

const HeaderDiv = styled.div`
    height: 80px;
    // margin-top: -80px;
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    background: transparent;

    @media screen and (max-width: 960px){
        transition: 0/8s all ease;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-wdith: 1100px;
`

const HeaderLogo = styled(LinkR)`
`

const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #007ea7;
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;


    @media screen and (max-width: 768px){
        display: none;
    }
`

const NavItem = styled.div`
    height: 80px;
`

const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`