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

    return (
        <ContainerFooter data-test="menu">
            <SCH2 data-test="habit-link" onClick={() => {navigateTo("/habitos")}}>Hábitos</SCH2>
            {/* <HomeBtn data-test="today-link" onClick={() => {navigateTo("/hoje")}}> */}
            <Link to="/hoje">
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
            </Link>
            {/* </HomeBtn> */}
            <SCH2 data-test="history-link" onClick={() => {navigateTo("/historico")}}>Histórico</SCH2>
        </ContainerFooter>
    )
}

const SCPorcentage = styled(CircularProgressbar)`
    width: 100px;
    height: 100px;
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
    padding-left: 2rem; padding-right: 2rem;
    height: 5.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    a{
        text-decoration:none;
    }
`

const SCH2 = styled.h2`
    cursor: pointer;
    font-size: 17.976px;
    line-height: 22px;
    color: #52B6FF;
    margin-top: 2rem;
`