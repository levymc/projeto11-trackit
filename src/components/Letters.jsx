import styled, { keyframes, css } from "styled-components";
import React, { useState, useEffect, useContext } from "react";

export default function Letters(props){

    const days = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [indexes, setIndexes] = useState([]); 
    const [daySelected, setDaySelected] = useState(days.map((day, i) => false))

    const changeSelect = (index, newValue) => {
        const newArray = [...daySelected];
        const newIndexes = [...indexes];
        newArray[index] = newValue;
        newIndexes.push(index);
        setDaySelected(newArray);
        setIndexes(newIndexes);
    };

    return (
        <ContainerLetters>
            {days.map((day, i) => 
                <Letter 
                    disabled={props.loading}
                    key={i} 
                    selected = {daySelected[i]}
                    onClick={() =>{
                        changeSelect(i, !daySelected[i])
                    }}
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