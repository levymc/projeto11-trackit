import styled from "styled-components"
import Input from "./Input"

export default function NewHabit(){

    const days = ["D", "S", "T", "Q", "Q", "S", "S"]

    return (
        <ContainerNewHabit>
            <Input placeholder="nome do hábito"/>
            <ContainerLetters>
                {days.map((day, i) => 
                    <Letter key={i}>{day}</Letter>
                )}
            </ContainerLetters>
        </ContainerNewHabit>
    )
}

const ContainerNewHabit = styled.div`
    width: 100%;
    /* height: 100px; */
    border-radius: 5px;
    background-color: #ffffff;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    position: relative;
    padding-bottom: 1.5rem;
    padding: 1rem;
`

const ContainerLetters = styled.div`
    /* position: absolute;
    left: 1.3rem;
    bottom: 1rem; */
    width: 100%;
    align-items:start;
    display: flex;
    gap: 0.25rem;
`

const Letter = styled.div`
    padding: 0.4rem;   
    display: flex;
    justify-content: center;
    align-items: start;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
`