import styled from "styled-components"

export default function Cabecalho(props){
    return (
        <ContainerCabecalho>
            <h1>Meus hábitos</h1>
            <SCButton 
                data-test="habit-create-btn"
                onClick={() => {
                    props.setIsNewHabit(!props.isNewHabit)
            }}>+</SCButton>
        </ContainerCabecalho>
    )
}
const ContainerCabecalho = styled.div`
    position: relative;
    width: 100%;
    /* background-color: red; */
    height: auto;
    display: flex;
    /* gap: 45vw; */
    align-items: center;
    /* justify-content: space-around; */
    h1{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        text-align: start;
    }
`

const SCButton = styled.button`
    width: 2.5rem;
    height: 2.1875rem;
    font-size: 18px;
    background-color: #52B6FF;
    border: 1px solid #52B6FF;
    border-radius: 5px;
    color: white;
    font-weight: 700;
    position: absolute;
    right: 0;

`