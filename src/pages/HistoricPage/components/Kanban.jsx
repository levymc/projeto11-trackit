import styled from "styled-components"
import Card from "./Card"

export default function Kanban(props){

    return (
        <KanbanContainer>
            <Card 
                allEntries = {props.allEntries}
                getEntries = {props.getEntries}
            />
        </KanbanContainer>
    )
}

const KanbanContainer = styled.div`
    width: 70%;
    /* background-color: yellowgreen; */
    margin-top:1em;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
`