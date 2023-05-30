import styled from "styled-components"

export default function Cabecalho(){
    return (
        <ContainerCabecalho>
            <h1>Meus hábitos</h1>
            <SCButton>+</SCButton>
        </ContainerCabecalho>
    )
}
const ContainerCabecalho = styled.div`
    width: 100%;
    background-color: red;
    height: auto;
    display: flex;
    gap: 50vw;
    align-items: center;
    justify-content: center;
`

const SCButton = styled.button`
    width: 2.5rem;
    height: 2.1875rem;
    font-size: 16px;
    background-color: #52B6FF;
    border: 1px solid #52B6FF;
    border-radius: 5px;
`