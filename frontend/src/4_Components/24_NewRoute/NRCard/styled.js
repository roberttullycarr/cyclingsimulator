import styled from "styled-components";

export const NewRouteCard = styled.div`
  width: 100%;
  display: flex;
  background: ${props => props.theme.CardBackColor};
  box-shadow: ${props => props.theme.BoxShadowWidget};
  padding: 1.2vw 1.2vw;
  border: ${props => props.theme.CardBorder};
  border-radius: ${props => props.theme.CardBorderRadius};
  margin-top: 2vw;
`;

export const NewRouteForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const NRContentLine = styled.div`
  width: 100%;
  display:flex;
  padding: .5vw 0;
`
export const NRContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 25%;
  height: 100%;
`

export const FileInput = styled.input`
  width: 95%;
  margin-top: 3%;
`