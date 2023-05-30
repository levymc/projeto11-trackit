import styled from "styled-components"
import trackitLogo from '../assets/trackitLogo.svg';
import bob from '../assets/bob.svg';

export default function Topo(){
    return (
        <NavContainer>
            <LogoNav src={trackitLogo}></LogoNav>
            <LogoNav src={bob}></LogoNav>
        </NavContainer>
    )
}


const NavContainer = styled.div`
    padding-left: 1rem; padding-right: 1rem;
    width: 100%;
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
    
`