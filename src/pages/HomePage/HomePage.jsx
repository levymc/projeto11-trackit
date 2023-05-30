import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import Logo from "../../components/Logo";
import Input from "../../components/Input";

export default function HomePage(props){
    const navigateTo = useNavigate();

    return (
        <>
            <ContainerHome >
                <Logo />
                <Input />
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
    background-color: #eaeaea;
    border-radius: 10px;
    border: 1px solid #d5d5d5;
`
