import styled, { keyframes, css } from "styled-components";
import React, { useState, useEffect, useContext } from "react";

export default function Letters(props){

    const days = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [indexes, setIndexes] = useState([]); 

    

    return (
        <ContainerLetters>
            {days.map((day, i) => 
                <Letter 
                    data-test="habit-day"
                    key={i} 
                    selected={props.daysSelected.includes(i)}
                >
                    {day}
                </Letter>
            )}
        </ContainerLetters>
    )
}


const ContainerLetters = styled.div`
    width: 100%;
    align-items:start;
    display: flex;
    gap: 0.25rem;
`

const Letter = styled.div`
    cursor: pointer;
    padding: 0.4rem;   
    display: flex;
    justify-content: center;
    align-items: start;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    color: ${(props) => !props.selected ? "#DBDBDB" : "white"};
    background-color: ${(props) => !props.selected ? "white" : "#CFCFCF"};
`