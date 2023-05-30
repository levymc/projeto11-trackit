import styled from "styled-components"

export default function Logo(){
    return (
        <ContainerLogo>
            Teste Logo
        </ContainerLogo>
    )
}

const ContainerLogo = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
`