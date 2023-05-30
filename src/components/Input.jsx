import styled from "styled-components"

export default function Input(props){
    return(
        <>
            <SCInput placeholder={props.placeholder}></SCInput>
        </>
    )
}
const SCInput = styled.input`
    width: 10vw;
    max-width: 200px;
    border: 1px solid #1f0a0a;
    border-radius: 5px;
`
