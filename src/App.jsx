import styled from "styled-components"
import axios from 'axios';
import React, { useState, createContext } from "react";
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom';
import CadastroPage from './pages/CadastroPage/CadastroPage'
import HomePage from "./pages/HomePage/HomePage";
import HojePage from "./pages/HojePage/HojePage";
import HabitosPage from "./pages/HabitosPage/HabitosPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import 'materialize-css/dist/css/materialize.min.css';
import ResetStyle from "./style/ResetStyle";
import Swal from 'sweetalert2';
import UserContext from "./components/UserContext";

export default function App() {

    axios.defaults.headers.common['Authorization'] = 'OIvqTxES0ukZ2VJ7BUguGPDu';

    const [dataUser, setDataUser] = useState({})
    const [percentage, setPercentage] = useState(0)

    return (
      <UserContext.Provider value={{ dataUser, setDataUser , percentage, setPercentage}}>
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
                      <Route path="/habitos" element={
                          <HabitosPage
                          />
                      }>
                      </Route>
                      <Route path="/hoje" element={
                          <HojePage
                          />
                      }>
                      </Route>
                      <Route path="/historico" element={
                          <HistoricPage
                          />
                      }>
                      </Route>
                  </Routes>
              </Router>
            </Container>
      </UserContext.Provider>
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

