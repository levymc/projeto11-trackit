import styled from "styled-components"
import axios from 'axios';
import React, { useState } from "react";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import ContainerInputs from "../../components/ContainerInputs"
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import LargeBtn from "../../components/LargeBtn";

export default function SeatsPage(props) {
    const [isLoading, setIsLoading] = useState(true);
    const navigateTo = useNavigate();

    const campos = [
        {
            name: "email",
        },
        {
            name: "senha",
        },
        {
            name: "nome",
        },
        {
            name: "foto",
        },
    ]

    return (
        <PageContainer>
            <Logo />
            <ContainerInputs>
                {campos.map((campo, i) => {
                    return (
                        <Input placeholder={campo.name} />
                    )
                })}
                <LargeBtn nome="Cadastrar" />
                <Link to="/" className="link">Já tem uma conta? Faça login!</Link>
            </ContainerInputs>
        </PageContainer>
    )
}

const LoadingContainer = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 100px;
`;


const PageContainer = styled.div`
    padding-top: 3em;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    background-color: #FFFFFF;
    border-radius: 10px;
`
