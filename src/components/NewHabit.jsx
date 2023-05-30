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
            <ContainerBtns>
                <button id="cancelarBtn">Cancelar</button>
                <button id="salvarBtn">Salvar</button>
            </ContainerBtns>
        </ContainerNewHabit>
    )
}

const ContainerNewHabit = styled.div`
    width: 100%;
    border-radius: 5px;
    background-color: #ffffff;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    padding-bottom: 1.5rem;
    padding: 1rem;
`

const ContainerLetters = styled.div`
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

const ContainerBtns = styled.div`
    padding-top: 1rem;
    width: 100%;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: end;
    #salvarBtn{
        background: #52B6FF;
        border: 1px solid #52B6FF;
        border-radius: 5px;
        padding: 0.5rem 1rem 0.5rem 1rem ;
        color: white;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        font-family: 'Lexend Deca';
    }
    #cancelarBtn{
        background: #FFFFFF;
        border: 0;
        padding: 0.5rem 1rem 0.5rem 1rem ;
        color: #52B6FF;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        font-family: 'Lexend Deca';
    }
`