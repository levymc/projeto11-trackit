import styled from "styled-components"
import axios from 'axios';
import React, { useState } from "react";
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom';
import CadastroPage from './pages/CadastroPage/CadastroPage'
import HomePage from "./pages/HomePage/HomePage";
import HabitosPage from "./pages/HabitosPage/HabitosPage";
import 'materialize-css/dist/css/materialize.min.css';
import ResetStyle from "./style/ResetStyle";



export default function App() {

    axios.defaults.headers.common['Authorization'] = 'OIvqTxES0ukZ2VJ7BUguGPDu';

    const [allEntries, setAllEntries] = useState([]);

    const getEntries = async () => {
      try {
        const response = await axios.get('https://6474ae917de100807b1b88ae.mockapi.io/api/v1/entrada');
        setAllEntries(response.data);
      } catch (error) {
        console.error('Erro ao buscar os filmes:', error);
        setAllEntries([]);
      }
    };
  
    React.useEffect(() => {
      getEntries();
    }, []);

    return (
        <>
          <ResetStyle />
            <Container>
              <Router>
                  <Routes>
                      <Route path="/" element={
                          <HomePage/>
                      }>
                      </Route>
                      <Route path="/cadastro" element={
                          <CadastroPage
                          />
                      }>
                      </Route>
                      <Route path="/h" element={
                          <HabitosPage
                          />
                      }>
                      </Route>
                  </Routes>
              </Router>
            </Container>
        </>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 0;
`

