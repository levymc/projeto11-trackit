import styled from "styled-components"
import logo from '../assets/logo.png';

export default function Logo(){
    return (
        <ContainerLogo>
            <SCLogo src={logo} alt="Logo"></SCLogo>
        </ContainerLogo>
    )
}

const ContainerLogo = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
`

const SCLogo = styled.img`
    border-radius: 3px;
    width: 40vw;
    max-width: 200px;
`