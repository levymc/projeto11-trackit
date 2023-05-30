import styled from "styled-components"
import Input from "./Input"

export default function Inputs(){
    return(
        <>
            <ContainerInputs>
                <Input placeholder="email"/>
                <Input placeholder="senha" />
                <SCButton>Enviar</SCButton>
                
            </ContainerInputs>
        </>
    )
}

const ContainerInputs = styled.div`
    background-color: blue;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const SCButton = styled.button`
    background-color: #52B6FF;
    padding: 0.5rem;
    width: 100%;
    max-width: 200px;
    color:white;
    font-family: "Lexend Deca";
    border-radius: 4.63636px;
    border: 1px solid #52B6FF;
`