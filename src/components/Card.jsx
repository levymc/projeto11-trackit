import styled from "styled-components";


export default function Card(props){
    return(
        <CardContainer>
            {props.text}
        </CardContainer>
    )
}

const CardContainer = styled.div`
    padding: 1rem;
    display:flex;
    background-color: white;
    border-radius: 10px;
`