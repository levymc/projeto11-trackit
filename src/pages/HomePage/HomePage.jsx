import styled from "styled-components";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import LargeBtn from "../../components/LargeBtn";
import ContainerInputs from "../../components/ContainerInputs";
import { LineWave } from "react-loader-spinner";

export default function HomePage(props){
    const navigateTo = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [respostaServidor, setRespostaServidor] = useState("")

    const loadIcon = <LineWave
    height="100"
    width="100"
    color="black"
    ariaLabel="line-wave"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    firstLineColor=""
    middleLineColor=""
    lastLineColor=""
/>

    const campos = [
        {
            name: "email",
        },
        {
            name: "senha",
        },
    ];

    const enviarLogin = () =>{
        const postData = {
            email: email,
            password: password
        };
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", postData)
            .then(response => {
                // Lógica para lidar com a resposta do servidor
                setRespostaServidor(response.data);
                setLoading(false);
            })
            .catch(error => {
                // Lógica para lidar com erros
                setLoading(false);
            });
    }
        

    const handleLogin = () => {
        setLoading(true);
        enviarLogin();
    };

    return (
        <>
            <ContainerHome>
                <Logo />
                <ContainerInputs>
                    {campos.map((campo, i) => {
                        return (
                            <Input key={i} placeholder={campo.name} />
                        )
                    })}
                    <LargeBtn 
                        nome= {respostaServidor.length == 0 ? loadIcon : "Entrar"}
                        onClick={handleLogin}>
                    </LargeBtn>
                    <Link to="/cadastro" className="link">Não tem uma conta? Cadastre-se!</Link>
                </ContainerInputs>
            </ContainerHome>
        </>
    );
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
`;
