import styled from "styled-components"

const BaseInputWrap = styled.div`
    width: ${props => `${props.width}%` || "90%"};
    height: ${props => `${props.height}%` || "10%"};
    margin-top: ${props => `${props.marginTop}%` || '0%'};
    margin-bottom: ${props => `${props.marginBottom}%` || '0%'};
`

const InputTitle = styled.h2`
margin: 0 0 .5% 2%;
color: ${props => props.theme.ELBlue};
font-family: Roboto, sans-serif;
font-size: 1.1vw;
text-align: left;
`

const BaseInputMain = styled.input`
  border: 1px solid #D5D5D5;
  border-radius: 4px;
  background-color: #EAEAEA;
  height: 100%;
  width: 100%;
  padding-left: 5%;
  ::placeholder {
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    font-size: 1.1vw;
  }
  
  :focus {
  outline: none;  
  }
`

// base input is setup to use with React hook forms, and needs a variable (var) passed to it, as well as a error message
// (message), a placeholder (title), and a type (type), to ensure it will work as you would like.
// Wrap in a form, pass the appropriate props and it should work!

const BaseInput = (props) => {
    return (
        <BaseInputWrap width={props.width} marginTop={props.marginTop} marginBottom={props.marginBottom} height={props.height}>
            {props.title ? (<InputTitle>{props.title}</InputTitle>): null}
            <BaseInputMain {...props.var(props.name, {required: props.message})} placeholder={props.placeholder} type={props.type} defaultValue={props.value}/>
        </BaseInputWrap>
    )
}

export default BaseInput