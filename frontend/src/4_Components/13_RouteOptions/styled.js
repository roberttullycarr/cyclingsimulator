import styled from "styled-components";


export const Form = styled.form`
  aspect-ratio: 4.10 / 1;
  width: 100%;
  height: auto;
  background: ${props => props.theme.CardBackColor};
  border: ${props => props.theme.CardBorder};
  border-radius: ${props => props.theme.CardBorderRadius};
  box-shadow: ${props => props.theme.BoxShadowWidget};
`

export const FormWrapper = styled.div`
  aspect-ratio: 4.05 / 1;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

export const Wrapper = styled.div`
  height: 100%;
  width: 28%;
  display: flex;
  flex-direction: column;
`

export const InnerWrapper =styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const RouteWrapper = styled.div`
  height: 100%;
  width: 20%;
  margin-left: 5%;
  margin-right: 3%;
  overflow-x: scroll;
`

export const RoutesInput = styled.div`
  border: 1px solid ${props => props.theme.AccentGray};
  border-radius: 5px;
  height: 65%;
  margin-top: 4%;
  margin-bottom: 2%;
  padding: 2% 2%;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  label{
    height: 12%;
    margin-bottom: 2%;
    display: flex;
    flex-direction: row;
  }
  
  p{
    margin-left: 4%;
    font-size: 1vw;
    height: 100%;
    min-width: 100%;
    white-space: nowrap;
    :hover {
      cursor: pointer;
    }
  }
  input{
    height: 100%;
  }
`

export const ErrorMessage = styled.h3`
  color: red;
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  margin-bottom: 2%;
`
export const ButtonWrapper = styled.div`
height: 100%;
  width: 16%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`