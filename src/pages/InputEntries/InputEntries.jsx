import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import CurrencyInput from 'react-currency-input-field';
import Swal from 'sweetalert2'

export default function Input(props){
    const navigateTo = useNavigate();

    const [valorSalario, setValorSalario] = useState('')
    const [data, setData] = useState('')
    const [valorOutros, setValorOutros] = useState('')

    const submit = event => {
        event.preventDefault();
        axios.post('https://6474ae917de100807b1b88ae.mockapi.io/api/v1/entrada', {salario: valorSalario, data: data}).then(response => {
            console.log(response)
            props.getEntries();
            successModal();
        }).catch(e => {
            console.log(e)
        })
      };

    const successModal = () => {
        Swal.fire({
            title: "Dados de Entrada Enviados com Sucesso!",
            icon: "success",
        }).then(response => {
            if(response.isConfirmed){
                navigateTo('/historicPage')
            }
        })
    }
    return (
        <>
            <SCInput onSubmit={submit}>
                <CurrencyInput
                    type="text" 
                    placeholder="Salário" 
                    onChange={(event) => setValorSalario(event.target.value) }
                    decimalsLimit={2}
                    prefix="R$"
                    />
                <input type="date" placeholder="Data" onChange={(event) => setData(event.target.value) }/>
                <input type="text" placeholder="Outros" onChange={(event) => setValorOutros(event.target.value) }/>
                <button className="waves-effect waves-light orange btn-small" type="submit">Enviar</button>
                {/* <button className="waves-effect waves-light orange btn-small" onClick={() => console.log(props.allEntries)}>ServerRefresh</button> */}
            </SCInput>
        </>
    )
}

const SCInput = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:50vw;
    height: 100vh;
    margin:auto;
    button{
        margin-top:1rem;
    }
`