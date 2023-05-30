import styled from "styled-components"
import axios from 'axios';
import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';


export default function SeatsPage(props) {
    const [isLoading, setIsLoading] = useState(true);
    const navigateTo = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Enviar os dados para o servidor
        navigateTo('/sucesso', {
        state: {
        }
        })
    };
      
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

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`