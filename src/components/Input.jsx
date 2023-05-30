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
`
