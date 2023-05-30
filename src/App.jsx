import styled from "styled-components"
import axios from 'axios';
import React, { useState } from "react";
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom';
import HistoricPage from './pages/HistoricPage/HistoricPage'
import HomePage from "./pages/HomePage/HomePage";
import 'materialize-css/dist/css/materialize.min.css';
import ResetStyle from "./style/ResetStyle";


export default function App() {

    axios.defaults.headers.common['Authorization'] = '6474ae917de100807b1b88ae';

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
                      <Route path="/historicPage" element={
                          <HistoricPage
                            allEntries = {allEntries}
                            getEntries = {getEntries}
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
`

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #505050;
    color: #ededed;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    z-index:1;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
