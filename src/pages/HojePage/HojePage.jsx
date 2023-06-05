import styled from "styled-components";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { InfinitySpin } from "react-loader-spinner";
import Swal from 'sweetalert2';
import UserContext from "../../components/UserContext";
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br';
import NavContainer from "../../components/NavContainer";


export default function HomePage(props){
    const {dataUser, setDataUser } = useContext(UserContext);
    const [token, setToken] = useState(dataUser.token)

    const navigateTo = useNavigate();
    const [loading, setLoading] = useState(false);
    const [percent, setPercent] = useState(0);

    const [dataCards, setDataCards] = useState([]);

    dayjs.locale('pt-br');
    const dataFormatada = dayjs().format('dddd, DD/MM').replace(/^\w/, (c) => c.toLocaleUpperCase());
    const [dataAtual, setDataAtual] = useState(dataFormatada);

    const getCards = async () => {
        try {
          const response = await axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setDataCards(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Erro ao buscar os filmes:', error);
          Swal.fire({
            icon: "error",
            title: "Algum erro ocorreu!",
            confirmButtonColor: "#52B6FF",
          })
        }
      };
    
      React.useEffect(() => {
        getCards();
      }, []);

    

    const [isSelected, setIsSelected] = useState(dataCards.map((card, i) => false))

    const loadIcon = (
        <InfinitySpin 
            width='200'
            color="black"
        />
    )


    return (
        <>
            <NavContainer />
            <ContainerHoje>
                
                <Topo>
                    <h1>{dataAtual}</h1>
                    <h2>{percent === 0 && "Nenhum hábito concluído ainda"}</h2>
                </Topo>
                {dataCards.map((data, i) => 
                    <Card 
                        key = {i}
                        text = {data.name}
                        recordAtual = {data.currentSequence}
                        selfRecord = {data.highestSequence}
                        isSelected = {isSelected}
                        setIsSelected = {setIsSelected}
                        index = {i}
                    />
                )}
                
                <Footer />
            </ContainerHoje>
        </>
    );
}

const ContainerHoje = styled.div`
    padding-top: 6em;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 6rem;
    align-items: start;
    /* justify-content: center; */
    gap: 1em;
    background-color: #E5E5E5;
    max-height: 100%;
    min-height: 100vh;
    border-radius: 10px;
    padding-left: 0.75em; padding-right: 0.75em; padding-bottom: 0.75em;
`;

const Topo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    h1{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    h2{
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`;