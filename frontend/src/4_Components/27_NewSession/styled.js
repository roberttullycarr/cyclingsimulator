import styled from "styled-components";

export const NewSessionMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.theme.CardWidthPercent};
  margin-bottom: 2vw;

`
export const NewSessionCard = styled.div`
  width: 100%;
  height: 6vw;
  background: ${props => props.theme.CardBackColor};
  box-shadow: ${props => props.theme.BoxShadowWidget};
  border: ${props => props.theme.CardBorder};
  padding: 0 2.5%;
  border-radius: ${props => props.theme.CardBorderRadius};
  margin-top: 2vw;
`;

export const NSContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.25%;
  height: 100%;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
`;

export const UserContent = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

export const SessionClient = styled.h1`
  margin-left: 2%;
  font-size: 1.2vw;
  color: ${props => props.theme.MainFontColor};
`;

export const FormWrap = styled.form`
  display: flex;
  align-items: center;
  height: 100%;
`

export const ButtonWrap = styled.div`
  justify-content: center;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 100%;
  flex-wrap: nowrap;
`
