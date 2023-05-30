import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";

export default function HomePage(props){
    const navigateTo = useNavigate();
    const pages = [
        {
            name: "Input Page",
            url: "/inputEntries"
        },
        {
            name: "Historic Page",
            url: "/historicPage"
        },
        {
            name: "Charts Page",
            url: "/chartsPage"
        },
    ]
    console.log(pages)
    return (
        <>
            <ContainerButtons >
                {pages.map((page, i) => {
                    return(
                            <Button key={i} className="waves-effect waves-light btn-small" onClick={() => navigateTo(page.url)}>{page.name}</Button>
                    )
                })}
            </ContainerButtons>
        </>
    )
}

const ContainerButtons = styled.div`
    margin-top:8rem;
    /* margin: auto; */
    width: 40%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    background-color: #eaeaea;
    border-radius: 10px;
    border: 1px solid #d5d5d5;
`

const Button = styled.button`
    width: 30%;
    height:3em;
    border-radius: 5px;
    background-color: #9c9c9c;
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: normal;
`
