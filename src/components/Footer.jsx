import styled from "styled-components"
import btnhome from '../assets/btnhome.svg';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer(){
    const navigateTo = useNavigate();
    const {dataUser, setDataUser, percentage, setPercentage } = useContext(UserContext);

    console.log(percentage)

    return (
        <ContainerFooter data-test="menu">
            <SCH2 data-test="habit-link" onClick={() => {navigateTo("/habitos")}}>Hábitos</SCH2>
            {/* <HomeBtn data-test="today-link" onClick={() => {navigateTo("/hoje")}}> */}
                <SCPorcentage
                    data-test="today-link"
                    value={percentage} 
                    text='Hoje'
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#FFFFFF",
                        pathColor: "#FFFFFF",
                        trailColor: "transparent"
                })}/>
            {/* </HomeBtn> */}
            <SCH2 data-test="history-link" onClick={() => {navigateTo("/historico")}}>Histórico</SCH2>
        </ContainerFooter>
    )
}

const SCPorcentage = styled(CircularProgressbar)`
    width: 91px;
    height: 91px;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
`

const ContainerFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width:100%;
    background-color: white;
    padding-bottom: 2em;
    height: 5.5rem;
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
    margin-top: 1rem;
`