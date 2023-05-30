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

    return (
        <>
            <ContainerHome >
                <Logo />
                <ContainerInputs>
                    <Input placeholder="email"/>
                    <Input placeholder="senha" />
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
    border: 1px solid #d5d5d5;
`
