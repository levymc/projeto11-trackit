import styled from "styled-components"
import NavContainer from "../../components/NavContainer"
import Cabecalho from "./components/cabecalho"


export default function HabitosPage(){
    return (
        <PageContainer>
            <NavContainer />

            <ConteudoContainer>
                <Cabecalho />
                AAA
            </ConteudoContainer>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    background-color: #FFFFFF;
    border-radius: 10px;
`
const ConteudoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 6rem;
    width: 100%;
    padding-left: 1rem; padding-right: 1rem;
    height: 100vh;
    background-color: yellowgreen;
`