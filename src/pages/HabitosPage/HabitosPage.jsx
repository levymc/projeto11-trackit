import styled from "styled-components"
import NavContainer from "../../components/NavContainer"
import Cabecalho from "../../components/Cabecalho"
import Footer from "../../components/Footer"

export default function HabitosPage(){
    return (
        <PageContainer>
            <NavContainer />

            <ConteudoContainer>
                <Cabecalho />
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </ConteudoContainer>
            <Footer />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75em;
    background-color: #FFFFFF;
    border-radius: 10px;
`
const ConteudoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 6rem;
    padding-left: 1rem; padding-right: 1rem;
    width: 100%;
    /* padding-left: 1rem; padding-right: 1rem; */
    height: 100vh;
    background-color: yellowgreen;
    p{
        word-break: break-all;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`