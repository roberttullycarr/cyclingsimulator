import styled from "styled-components";

export const NewClientCardMain = styled.div`
  width: 100%;
  display: flex;
  background: ${props => props.theme.CardBackColor};
  box-shadow: ${props => props.theme.BoxShadowWidget};
  padding: 1.2vw 1.2vw;
  border: ${props => props.theme.CardBorder}
  border-radius: ${props => props.theme.CardBorderRadius};
  margin-top: 2vw;
`;

export const NewClientForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const NCContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 33.33%;
  height: 100%;
`

export const NCContentLine = styled.div`
  width: 100%;
  display:flex;
  padding: .5vw 0;
`

export const FileInput = styled.input`
  width: 100%;
  visibility: hidden;
`

export const AvatarLabel = styled.label`
width: 100%;
  height: 2.9vw;
`

export const AvatarWrap = styled(NCContent)`
padding-top: 1%;
`

export const FileInputButton = styled.div`
  width: 95%;
  height: 2.9vw;
  border-radius: ${props => props.theme.CardBorderRadius};
  margin-left: 2.8%;
  background-color: ${props => props.theme.ELBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  svg {
    fill: white;
  }
  :hover {
    transform: scale(1.01);
  }
  :active {
    transform: scale(1);
  }
`

export const CameraImage = styled.img`
height: 70%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

export const CheckboxWrap = styled(NCContent)`
  margin-top: 1vw;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
`