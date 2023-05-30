import styled from "styled-components"


export default function Card(props){
    console.log(props.allEntries)
    return (
        <>
            {props.allEntries.map((entry, i) => 
                <CardContainer key={i}>
                    <p>Salário: <strong>{entry.salario}</strong></p>
                    <p>Data: <strong>{entry.data}</strong></p>
                </CardContainer>
            )}
            
        </>
        
    )
}

const CardContainer = styled.div`
    padding: 1.5rem;
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: white;
    width:auto;
    max-width: 15rem;
    height: auto;
    border-radius: 10px;
    border: 1px solid #8a8a8a;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.75rem;
    p{
        word-break: break-all;
    }

`