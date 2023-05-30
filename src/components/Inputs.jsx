import styled from "styled-components"
import Input from "./Input"
import { Link } from 'react-router-dom';
import LargeBtn from "./LargeBtn";


export default function Inputs(){
    return(
        <>
            <ContainerInputs>
                <Input placeholder="email"/>
                <Input placeholder="senha" />
                <LargeBtn nome="Entrar"/>
                <Link to="/cadastro" className="link">Não tem uma conta? Cadastre-se!</Link>
            </ContainerInputs>
        </>
    )
}

const ContainerInputs = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .link{
        margin-top: 2em;
    }
`
