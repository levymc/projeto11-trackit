import styled, { keyframes } from "styled-components";
import NavContainer from "../../components/NavContainer";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer";
import NewHabit from "../../components/NewHabit";
import React, { useState } from "react";

export default function HabitosPage() {
  const [isNewHabit, setIsNewHabit] = useState(false);

  return (
    <PageContainer>
      <NavContainer />

      <ConteudoContainer>
        <Cabecalho setIsNewHabit={setIsNewHabit} isNewHabit={isNewHabit} />
        <NewHabitContainer isNewHabit={isNewHabit}>
          {isNewHabit && <NewHabit />}
        </NewHabitContainer>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </p>
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
  background-color: #E5E5E5;
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
  opacity: ${(props) => (props.isNewHabit ? 1 : 0)};
  transform: translateY(${(props) => (props.isNewHabit ? 0 : "-10px")});
  animation: ${fadeAnimation} 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;
