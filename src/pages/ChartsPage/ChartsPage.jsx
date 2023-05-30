import styled from "styled-components"
import axios from 'axios';
import React, { useState } from "react";
import { useLocation, useNavigate, Link  } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, registerables } from "chart.js";

export default function ChartsPage(props) {
    const navigateTo = useNavigate();

    Chart.register(...registerables);
    const salarios = props.allEntries.map(entry => {
        const salarioString = entry.salario.replace('R$', '').replace(/\./g, '').replace(',', '.');
        return parseFloat(salarioString);
      });      
    const datas = props.allEntries.map(entry => entry.data);

    const data = {
        labels: datas,
        datasets: [
          {
            label: 'Salários',
            data: salarios,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      };


    return (
        <PageContainer>
            <Line data={data} />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`