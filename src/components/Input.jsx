import styled from "styled-components"

export default function Input(props){
    return(
        <>
            <SCInput 
                disabled={props.disabled} 
                type={props.type} 
                onChange={props.onChange} 
                placeholder={props.placeholder}
            >

            </SCInput>
        </>
    )
}
const SCInput = styled.input`
    width: 10vw;
    max-width: 300px;
    border: 1px solid #1f0a0a;
    border-radius: 5px;
`
