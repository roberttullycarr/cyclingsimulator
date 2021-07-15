import styled from "styled-components";

export const Container = styled.div`
  aspect-ratio: 8.95 / 1;
  width: 85%;
  height: auto;
  display: flex;
  background: ${props => props.theme.ELWhite};
  border: solid 1px ${props => props.theme.BorderColor};
  border-radius: 5px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  margin-top: 2vw;
  margin-bottom: 1vw;
`

export const AthleteWrapper = styled.div`
  width: 10%;
  margin-left: 1.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormWrapper = styled.form`
  width: 80%;
  display: flex;
  margin: 0 0;
`

export const SaveBtnWrap = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const WrapperRight = styled(SaveBtnWrap)`
`
export const EditWrap = styled.div`
height: 100%;
  width: 3%;
  padding-top: .5%;
`

export const Edit = styled.button`
  width: 75%;
  border: none;
  background-color: transparent;
  margin: 7% 7% 0 0;
  svg{
    width: 100%;
    height: 100%;
  }
`

export const Left = styled.div`
  width: 50%;
`

export const Right = styled.div`
  width: 50%;
`