import styled from "styled-components"
import axios from 'axios';
import React, { useState, useContext } from "react";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import ContainerInputs from "../../components/ContainerInputs"
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import LargeBtn from "../../components/LargeBtn";
import { InfinitySpin } from "react-loader-spinner";
import Swal from 'sweetalert2';
import UserContext from "../../components/UserContext";

export default function SeatsPage(props) {
    const [loading, setLoading] = useState(false);
    const navigateTo = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("")
    const [urlImg, setUrlImg] = useState("")

    const { dataUser, setDataUser } = useContext(UserContext);

    console.log(dataUser)

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
                navigateTo("/");
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
            dataTest: "email-input",
        },
        {
            name: "senha",
            type: "password",
            setVar: setPassword,
            dataTest: "password-input",
        },
        {
            name: "nome",
            type: "text",
            setVar: setNome,
            dataTest: "user-name-input",
        },
        {
            name: "foto",
            type: "url",
            setVar: setUrlImg,
            dataTest: "user-image-input",
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
                            dataTest={campo.dataTest}
                        />
                    )
                })}
                <LargeBtn dataTest="signup-btn" disabled={loading} nome={loading ? loadIcon : "Cadastrar"} />
                <Link data-test="login-link" to="/" className="link">Já tem uma conta? Faça login!</Link>
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
