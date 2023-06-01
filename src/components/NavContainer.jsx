import styled from "styled-components"
import trackitLogo from '../assets/trackitLogo.svg';
import bob from '../assets/bob.svg';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";

export default function Topo(){
    const navigateTo = useNavigate();

    const {dataUser, setDataUser } = useContext(UserContext);
    
    return (
        <NavContainer>
            <LogoNav onClick={() => navigateTo("/")} src={trackitLogo}></LogoNav> {/* Tirar o navigateTo */}
            <LogoUser onClick={() => console.log(dataUser.image)} src={dataUser.image}></LogoUser> {/* Tirar o navigateTo */}
        </NavContainer>
    )
}


const NavContainer = styled.div`
    padding-left: 1rem; padding-right: 1rem;
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #126BA5;
    color: #ededed;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    z-index:1;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`

const LogoNav = styled.img`
    cursor: pointer;
`

const LogoUser = styled.img`
    cursor: pointer;
    border-radius: 50%;
    width: 3.5rem;
`