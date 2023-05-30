import styled from "styled-components"


export default function LargeBtn(props){
    return (
        <>
            <SCButton>{props.nome}</SCButton>
        </>
    )
}

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