import styled from "styled-components"
import axios from 'axios';
import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';


export default function SeatsPage(props) {
    const [isLoading, setIsLoading] = useState(true);
    const navigateTo = useNavigate();

    return (
        <PageContainer>
            <h1>Entradas</h1>

        </PageContainer>
    )
}

const LoadingContainer = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 100px;
`;


const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
    width:100%;
`
