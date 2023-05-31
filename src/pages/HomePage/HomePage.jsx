import styled from "styled-components";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import LargeBtn from "../../components/LargeBtn";
import ContainerInputs from "../../components/ContainerInputs";
import { InfinitySpin } from "react-loader-spinner";

export default function HomePage(props){
    const navigateTo = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [respostaServidor, setRespostaServidor] = useState("")

    const loadIcon = (
        <InfinitySpin 
            width='200'
            color="black"
        />
    )

    const campos = [
        {
            name: "email",
            var: email,
            setVar: setEmail,
        },
        {
            name: "senha",
            var: password,
            setVar: setPassword,
        },
    ];

    const enviarLogin = () =>{
        const postData = {
            email: email,
            password: password
        };
        setLoading(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", postData)
            .then(response => {
                // Lógica para lidar com a resposta do servidor
                setRespostaServidor(response.data);
                setLoading(false);
            })
            .catch(error => {
                setRespostaServidor(error);
                setLoading(false);
            });
    }
        

    const handleLogin = (e) => {
        console.log(email,password)
        e.preventDefault();
        enviarLogin();
    };

    return (
        <>
            <ContainerHome>
                <Logo />
                <ContainerInputs onSubmit={handleLogin}>
                    {campos.map((campo, i) => {
                        return (
                            <Input 
                            disabled={loading} 
                            key={i} 
                            type={i === 0 ? 'email' : 'password'} 
                            placeholder={campo.name} 
                            onChange={(e) => campo.setVar(e.target.value)} />
                        )
                    })}
                    <LargeBtn 
                        nome= {loading ? loadIcon : "Entrar"}
                        disabled={loading}
                    >
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
