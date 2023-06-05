
export default function Letters(props){

    return (
        <ContainerLetters>
            {props.days.map((day, i) => 
                <Letter 
                    disabled={props.loading}
                    key={i} 
                    selected = {props.daySelected[i]}
                    onClick={() =>{
                        props.changeSelect(i, !props.daySelected[i])
                    }}
                >
                    {day}
                </Letter>
            )}
        </ContainerLetters>
    )
}


const ContainerLetters = styled.div`
    width: 100%;
    align-items:start;
    display: flex;
    gap: 0.25rem;
`

const Letter = styled.div`
    cursor: pointer;
    padding: 0.4rem;   
    display: flex;
    justify-content: center;
    align-items: start;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    color: ${(props) => !props.selected ? "#DBDBDB" : "white"};
    background-color: ${(props) => !props.selected ? "white" : "#CFCFCF"};
`