import styled from "styled-components"
import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import Logo from "../../components/Logo";
import Input from "../../components/Input"
import LargeBtn from "../../components/LargeBtn";
import ContainerInputs from "../../components/ContainerInputs";

export default function HomePage(props){
    const navigateTo = useNavigate();

    const campos = [
        {
            name: "email",
        },
        {
            name: "senha",
        },
    ]

    return (
        <>
            <ContainerHome >
                <Logo />
                <ContainerInputs>
                    {campos.map((campo, i) => {
                        return (
                            <Input placeholder={campo.name} />
                        )
                    })}
                    <LargeBtn nome="Entrar"/>
                    <Link to="/cadastro" className="link">Não tem uma conta? Cadastre-se!</Link>
                </ContainerInputs>
            </ContainerHome>
        </>
    )
}

const ContainerHome = styled.div`
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
