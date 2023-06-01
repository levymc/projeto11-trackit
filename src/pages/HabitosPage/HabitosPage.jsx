import styled, { keyframes, css } from "styled-components";
import NavContainer from "../../components/NavContainer";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer";
import NewHabit from "../../components/NewHabit";
import Swal from "sweetalert2";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../components/UserContext";


export default function HabitosPage() {
  const [isNewHabit, setIsNewHabit] = useState(false);
  const [habits, setHabits] = useState([])

  const {dataUser, setDataUser } = useContext(UserContext);
  const [token, setToken] = useState(dataUser.token)

  console.log(dataUser)

  const getHabits = async () => {
      try {
        const response = await axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setHabits(response.data);
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
      getHabits();
    }, []);

  return (
    <PageContainer>
      <NavContainer />

      <ConteudoContainer>
        <Cabecalho setIsNewHabit={setIsNewHabit} isNewHabit={isNewHabit} />
        <NewHabitContainer isNewHabit={isNewHabit}>
          {isNewHabit && <NewHabit setIsNewHabit={setIsNewHabit} />}
        </NewHabitContainer>
        {habits.length===0 && <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
      </ConteudoContainer>
      <Footer />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
  background-color: #ffffff;
  border-radius: 10px;
`;

const ConteudoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  height: 100vh;
  p {
    word-break: break-all;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;

const fadeAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NewHabitContainer = styled.div`
  opacity: 0;
  transform: translateY(-10px);
  animation: ${fadeAnimation} 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  ${(props) =>
    props.isNewHabit &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;
