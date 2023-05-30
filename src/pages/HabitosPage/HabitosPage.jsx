import styled from "styled-components"
import NavContainer from "../../components/NavContainer"


export default function HabitosPage(){
    return (
        <PageContainer>
            <NavContainer>AA</NavContainer>
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