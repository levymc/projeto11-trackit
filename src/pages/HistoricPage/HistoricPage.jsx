import styled from "styled-components";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NavContainer from "../../components/NavContainer";
import Footer from "../../components/Footer";


export default function HistoricPage(){
    return (
        <HistoricContainer>
            <NavContainer />
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <Footer />
        </HistoricContainer>
    )
}

const HistoricContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem; padding-top: 7rem;
    align-items: start;
    position: relative;
    gap: 1.5em;
    background-color: #E5E5E5;
    min-height: 100vh;
    max-height: 100%;
    border-radius: 10px;
    h1{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        text-align: start;
        margin-left: 1rem; margin-right: 1rem;
    }
    p{
        font-size: 17.976px;
        line-height: 22px;
        margin-left: 1rem; margin-right: 1rem;
        color: #666666;
    }
`