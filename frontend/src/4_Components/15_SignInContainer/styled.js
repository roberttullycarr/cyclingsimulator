import styled from "styled-components";
export const SIUContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  aspect-ratio: 9 / 8;
  background: ${props => props.theme.ELWhite};
  border: 1px solid #BDBDBD;
  border-radius: 5px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
  align-items: center;
`

export const ContainerTitle = styled.h1`
color: ${props => props.theme.ELGreen};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.8vw;
  margin-top: 7%;
`

export const InputWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 80%;
`

export const ErrorMessage = styled.h3`
  color: red;
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;
`