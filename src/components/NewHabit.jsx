import styled from "styled-components"
import Input from "./Input"
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import UserContext from "./UserContext";
import { InfinitySpin } from "react-loader-spinner";
import Letters from "./Letters";

export default function NewHabit(props){

    const {dataUser, setDataUser } = useContext(UserContext);
    const [token, setToken] = useState(dataUser.token)

    const loadIcon = (
        <InfinitySpin 
            width='20'
            color="black"
        />
      )
    
    const cancelarBtn = () => {
        props.setIsNewHabit(false)
    }

    const enviarNewHabit = () => {
        props.setLoading(true)
        const data = {
            name: props.newHabit,
            days: props.indexes
        }
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", data, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then(response => {
            console.log(response.data)
            props.setLoading(false)
        }).catch(error => {
            console.error('Erro:', error);
            Swal.fire({
                icon: "error",
                title: "Algum erro ocorreu!",
                confirmButtonColor: "#52B6FF",
            })
        })
        props.setNewHabit("")
        props.setDaySelected(days.map((day, i) => false))
    }
    

    console.log(props.onChange, props.newHabit)
    return (
        <ContainerNewHabit>
            <Input disables={props.loading} onChange={props.onChange} newHabit={props.newHabit} setIsNewHabit={props.setIsNewHabit} placeholder="nome do hábito"/>
            <Letters days={props.days} loading={props.loading} daySelected={props.daySelected} />
            {/* <ContainerLetters>
                {props.days.map((day, i) => 
                    <Letter 
                        disabled={props.loading}
                        key={i} 
                        selected = {props.daySelected[i]}
                        onClick={() =>{
                            props.changeSelect(i, !props.daySelected[i])
                        }}
                    >
                        {day}
                    </Letter>
                )}
            </ContainerLetters> */}
            <ContainerBtns>
                <button id="cancelarBtn" onClick={cancelarBtn} >Cancelar</button>
                <button id="salvarBtn" onClick={enviarNewHabit}>{!props.loading ? "Salvar" : loadIcon}</button>
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