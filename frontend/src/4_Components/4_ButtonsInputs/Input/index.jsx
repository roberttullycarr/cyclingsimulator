import styled from "styled-components"

const BaseInputWrap = styled.div`
    width: ${props => `${props.width}%` || "90%"};
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
  ::placeholder {
    font-family: "Mulish", sans-serif;
    font-weight: 700;
    font-size: 1.1vw;
    padding-left: 5%;
  }
`
const BaseInput = (props) => {
    return (
        <BaseInputWrap width={props.width}>
            <InputTitle>text</InputTitle>
            <BaseInputMain placeholder={'text'}/>
        </BaseInputWrap>
    )
}

export default BaseInput