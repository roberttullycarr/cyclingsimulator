import styled from "styled-components"

const BaseInputWrap = styled.div`
    width: ${props => `${props.width}%` || "90%"};
    margin-top: ${props => `${props.marginTop}%` || '0%'};
    margin-bottom: ${props => `${props.marginBottom}%` || '0%'};
`

const InputTitle = styled.h2`
margin: 0 0 .5% 2%;
color: ${props => props.theme.ELBlue};
font-family: Roboto, sans-serif;
font-size: 1.1vw;

`

const BaseInputMain = styled.input`
  border: 1px solid #D5D5D5;
  border-radius: 4px;
  background-color: #EAEAEA;
  height: 4vw;
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
const BaseInput = (props) => {
    return (
        <BaseInputWrap width={props.width} marginTop={props.marginTop} marginBottom={props.marginBottom}>
            <InputTitle>{props.title}</InputTitle>
            <BaseInputMain placeholder={props.title}/>
        </BaseInputWrap>
    )
}

export default BaseInput