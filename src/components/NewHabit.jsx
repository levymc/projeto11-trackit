import styled from "styled-components"
import Input from "./Input"

export default function NewHabit(){
    return (
        <ContainerNewHabit>
            <Input placeholder="nome do hábito"/>
            AAAAAAAAAAAAA
        </ContainerNewHabit>
    )
}

const ContainerNewHabit = styled.div`
    width: 100%;
    height: 100px;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`