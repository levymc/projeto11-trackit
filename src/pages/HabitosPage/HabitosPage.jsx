import styled, { keyframes, css } from "styled-components";
import NavContainer from "../../components/NavContainer";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer";
import NewHabit from "../../components/NewHabit";
import Swal from "sweetalert2";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../components/UserContext";
import Letters from "../../components/Letters";
import { BsTrash } from "react-icons/bs";

export default function HabitosPage() {
  const [isNewHabit, setIsNewHabit] = useState(false);
  const [habits, setHabits] = useState([])

  const {dataUser, setDataUser } = useContext(UserContext);
  const [token, setToken] = useState(dataUser.token)
  const [newHabit, setNewHabit] = useState("")
  const [loading, setLoading] = useState(false);

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

    const deleteHabit = async (id) => {
      try {
        const response = await axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        getHabits();
        return response.data;
      } catch (error) {
        console.error('Erro ao deletar o item:', error);
        throw error;
      }
    }
    
    const divHabit = habits.map((habit, i) => (
      <SCDivHabit data-test="habit-container" key={i}>
        <h1 data-test="habit-name">{habit.name}</h1>
        <SecTrash>
          <BsTrash data-test="habit-delete-btn" onClick={async () => {
            try {
              await deleteHabit(habit.id);
              console.log('Item deletado com sucesso!');
            } catch (error) {
              console.error('Erro ao deletar o item:', error);
            }
          }} />
        </SecTrash>
        <Letters key={i} id={habit.id} daysSelected={habit.days} loading={loading} />
      </SCDivHabit>
    ));

  return (
    <PageContainer>
      <NavContainer />

      <ConteudoContainer>
        <Cabecalho setIsNewHabit={setIsNewHabit} isNewHabit={isNewHabit} />
        <NewHabitContainer data-test="habit-create-container" isNewHabit={isNewHabit}>
          {isNewHabit && <NewHabit getHabits={getHabits} setLoading={setLoading} loading={loading} setIsNewHabit={setIsNewHabit} setNewHabit={setNewHabit} onChange={(e) => setNewHabit(e.target.value)} newHabit={newHabit} />}
        </NewHabitContainer>
        {habits.length===0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : divHabit}
      </ConteudoContainer>
      <Footer />
    </PageContainer>
  );
}

const SecTrash = styled.section`
  position: absolute;
  right: 15px;
  cursor: pointer;
`

const SCDivHabit = styled.div`
  position: relative;
  width: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding-bottom: 1.5rem;
  padding: 1rem;
`

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
  background-color: #E5E5E5;
  /* border-radius: 10px; */
  position: relative;
`;

const ConteudoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 10rem;
  background-color: #E5E5E5;
  width: 100%;
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
