import styled from "styled-components"
import axios from 'axios';
import React, { useState } from "react";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import ContainerInputs from "../../components/ContainerInputs"
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import LargeBtn from "../../components/LargeBtn";
import { InfinitySpin } from "react-loader-spinner";

export default function SeatsPage(props) {
    const [loading, setLoading] = useState(false);
    const navigateTo = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("")
    const [urlImg, setUrlImg] = useState("")

    const loadIcon = (
        <InfinitySpin 
            width='200'
            color="black"
        />
    )

    const enviarCadastro = () =>{
        const postData = {
            email: email,
            password: password,
            name: nome,
            image: urlImg
        };
        setLoading(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", postData)
            .then(response => {
                console.log(response.data)
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log(error)
            });
    }
        

    const handleCadastro = (e) => {
        console.log(email, password,nome, urlImg)
        e.preventDefault();
        enviarCadastro();
    };
    
    const campos = [
        {
            name: "email",
            type: "email",
            setVar: setEmail,
        },
        {
            name: "senha",
            type: "password",
            setVar: setPassword,
        },
        {
            name: "nome",
            type: "text",
            setVar: setNome,
        },
        {
            name: "foto",
            type: "url",
            setVar: setUrlImg,
        },
    ]

    return (
        <PageContainer>
            <Logo />
            <ContainerInputs onSubmit={handleCadastro}>
                {campos.map((campo, i) => {
                    return (
                        <Input 
                            disabled={loading}
                            type={campo.type} 
                            onChange={(e) => campo.setVar(e.target.value)} 
                            key={i} 
                            placeholder={campo.name} 
                        />
                    )
                })}
                <LargeBtn disabled={loading} nome={loading ? loadIcon : "Cadastrar"} />
                <Link to="/" className="link">Já tem uma conta? Faça login!</Link>
            </ContainerInputs>
        </PageContainer>
    )
}


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
