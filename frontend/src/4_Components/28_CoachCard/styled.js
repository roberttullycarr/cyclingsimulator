import styled from "styled-components";

export const Container = styled.div`
  aspect-ratio: 8.95 / 1;
  width: 100%;
  height: auto;
  display: flex;
  background: ${props => props.theme.CardBackColor};
  border: ${props => props.theme.CardBorder};
  border-radius: ${props => props.theme.CardBorderRadius};
  box-shadow: ${props => props.theme.BoxShadowWidget};
  //margin-top: 2vw;
  margin-bottom: 1vw;
`

export const AthleteWrapper = styled.div`
  width: 10%;
  margin-left: 1.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  div{
    position: absolute;
  }
  svg{
    z-index: 1;
  }
`

export const FormWrapper = styled.form`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 0 0;
  //border: 1px solid red;
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
  //display: flex;
  //justify-content: center;
  //align-items: center;
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
    fill: ${props => props.theme.ELBlue};
    width: 100%;
    height: 100%;
  }
  
  :hover {
    svg{
      fill: ${props => props.theme.MBGreen};
      cursor: pointer;
    }
  }
`

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 1px solid blue;
`

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 1px solid green;
`