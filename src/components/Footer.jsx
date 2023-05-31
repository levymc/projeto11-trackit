import styled from "styled-components"
import btnhome from '../assets/btnhome.svg';

export default function Footer(){

    return (
        <ContainerFooter>
            <SCH2>Hábitos</SCH2>
            <HomeBtn>Hoje</HomeBtn>
            <SCH2>Histórico</SCH2>
        </ContainerFooter>
    )
}

const ContainerFooter = styled.div`
    position: absolute;
    bottom: 0;
    width:100%;
    /* background-color: pink; */
    padding-bottom: 1.5em;
    height: 6rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const HomeBtn = styled.div`
    cursor: pointer;
    background-image: url(${btnhome});
    background-size: cover;
    background-position: center;
    width: 100px; /* Ajuste o tamanho conforme necessário */
    height: 100px; /* Ajuste o tamanho conforme necessário */
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-size: 17.976px;
    line-height: 22px;
`;

const SCH2 = styled.h2`
    cursor: pointer;
    font-size: 17.976px;
    line-height: 22px;
    color: #52B6FF;
`