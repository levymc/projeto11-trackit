import styled from "styled-components";


export default function Card(props){
    return(
        <CardContainer>
            <TextContainer>
                <h1>{props.text}</h1>
                <h2>Sequência atual: {props.recordAtual}</h2>
                <h2>Seu Recorde: {props.selfRecord}</h2>
            </TextContainer>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    padding: 1rem;
    display:flex;
    background-color: white;
    border-radius: 10px;
    width: 100%;
`

const TextContainer = styled.div`
    
    h1{
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 0.25rem;
    }
    h2{
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`