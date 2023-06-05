import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "./UserContext";


export default function Card(props){
    const {dataUser, setDataUser } = useContext(UserContext);
    const [token, setToken] = useState(dataUser.token)


    const changeSelect = (index, newValue) => {
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }).then((response) => {
                console.log(response);
                const newArray = [...props.isSelected];
                newArray[index] = newValue;
                props.setIsSelected(newArray);
                const trueCount = newArray.reduce((count, value) => count + (value ? 1 : 0), 0);
                const percentage = Math.ceil((trueCount / newArray.length) * 100);
                props.setPercent(percentage);
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data.message)
            });
    };
    
    const uncheckHabit = (index, newValue) => {
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/uncheck`,
            {},
            {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                console.log(response);
                const newArray = [...props.isSelected];
                newArray[index] = newValue;
                props.setIsSelected(newArray);
                const trueCount = newArray.reduce((count, value) => count + (value ? 1 : 0), 0);
                const percentage = Math.ceil((trueCount / newArray.length) * 100);
                props.setPercent(percentage);
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data.message);
            });
    };
      
    return(
        <CardContainer data-test="today-habit-container">
            <TextContainer selfRecord={props.selfRecord} isSelected={props.isSelected[props.index]} recordAtual={props.recordAtual} >
                <h1 data-test="today-habit-name">{props.text}</h1>
                <h2 data-test="today-habit-sequence">Sequência atual: <font id="atual">{props.recordAtual} dias</font></h2>
                <h2 data-test="today-habit-record">Seu Recorde: <font  id="record">{props.selfRecord} dias</font></h2>
            </TextContainer>
            <CheckContainer
                data-test="today-habit-check-btn"
                isSelected={props.isSelected[props.index]}
                onClick={() => {
                if (props.isSelected[props.index]) {
                    uncheckHabit(props.index, false);
                } else {
                    changeSelect(props.index, true);
                }
                }}
            > 
                <AiOutlineCheck />
            </CheckContainer>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    padding: 1.25rem;
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
    #atual{
        color: ${(props) => props.isSelected ? "#8FC549" : "#666666"}
    }
    #record{
        color: ${(props) => (props.isSelected && props.selfRecord === props.recordAtual) ? "#8FC549" : "#666666"}
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
    background-color: ${(props) => !props.isSelected ? "#E7E7E7" : "#8FC549"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    color:white;
    cursor: pointer;
`