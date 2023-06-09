import styled from "styled-components";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import LargeBtn from "../../components/LargeBtn";
import ContainerInputs from "../../components/ContainerInputs";
import { InfinitySpin } from "react-loader-spinner";
import Swal from 'sweetalert2';
import UserContext from "../../components/UserContext";

export default function HomePage(props){
    const navigateTo = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { dataUser, setDataUser } = useContext(UserContext);


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
            dataTest: "email-input"
        },
        {
            name: "senha",
            var: password,
            setVar: setPassword,
            dataTest: "password-input"
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
                setLoading(false);
                setDataUser(response.data)
                navigateTo("/hoje")
            })
            .catch(error => {
                setLoading(false);
                alert(error.response.data.message)
                // Swal.fire({
                //     title: error.response.data.message,
                //     confirmButtonColor: "#52B6FF",
                // })
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
                            onChange={(e) => campo.setVar(e.target.value)} 
                            dataTest = {campo.dataTest}
                            />
                        )
                    })}
                    <LargeBtn 
                        nome = {loading ? loadIcon : "Entrar"}
                        disabled = {loading}
                        dataTest = "login-btn"
                    >
                    </LargeBtn>
                    <Link data-test="signup-link" to="/cadastro" className="link">Não tem uma conta? Cadastre-se!</Link>
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
