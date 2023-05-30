import styled from "styled-components"

export default function Input(){
    return(
        <>
            <ContainerInput>
                <SCInput placeholder="email"></SCInput>
                <SCInput placeholder="senha"></SCInput>
                <SCButton>Enviar</SCButton>
                
            </ContainerInput>
        </>
    )
}

const ContainerInput = styled.div`
    background-color: blue;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SCInput = styled.input`
    width: 10vw;
    max-width: 200px;
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