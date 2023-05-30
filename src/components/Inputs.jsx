import styled from "styled-components"
import Input from "./Input"
import { Link } from 'react-router-dom';
import LargeBtn from "./LargeBtn";
import ContainerInputs from "./ContainerInputs";


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

