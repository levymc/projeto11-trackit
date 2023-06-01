import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import React, { useState, useEffect, useContext } from "react";


export default function Card(props){

    const [isSelected, setIsSelected] = useState(false)

    return(
        <CardContainer>
            <TextContainer>
                <h1>{props.text}</h1>
                <h2>Sequência atual: {props.recordAtual}</h2>
                <h2>Seu Recorde: {props.selfRecord}</h2>
            </TextContainer>
            <CheckContainer isSelected={isSelected}>
                <AiOutlineCheck />
            </CheckContainer>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    padding: 1rem;
    display:flex;
    align-items: center;
    /* justify-content: space-around; */
    background-color: white;
    border-radius: 10px;
    width: 100%;
    gap: 2rem;
    position: relative;
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

const CheckContainer = styled.div`
    position: absolute;
    right: 1rem;
    padding: 0.5rem;
    font-size: 50px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => !props.isSelected && "#E7E7E7"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    color:white;
    cursor: pointer;
`