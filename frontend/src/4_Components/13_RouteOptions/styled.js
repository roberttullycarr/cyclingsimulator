import styled from "styled-components";

export const RouteGenWrap = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Form = styled.form`
  aspect-ratio: 4.05 / 1;
  width: 100%;
  height: auto;
  background: ${props => props.theme.ELWhite};
  border: solid 1px ${props => props.theme.BorderColor};
  border-radius: 5px;
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
  width: 30%;
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
  width: 25%;
  margin-left: 5%;
  margin-right: 5%;
`

export const RoutesInput = styled.div`
  height: 65%;
  margin-top: 4%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  
  label{
    height: 10%;
  }
  
  .routes {
    margin-bottom: 2%;
    width: 80%;
    display: flex;
  }
  p{
    margin-left: 4%;
    width: 100%;
    font-size: 1vw;
    :hover {
      cursor: pointer;
    }
  }
  input{
    width: 8%;
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