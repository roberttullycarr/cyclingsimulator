import styled from "styled-components";

export const ClientCardMain = styled.div`
  width: 82%;
  height: 16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.CardBackColor};
  border: ${props => props.theme.CardBorder};
  border-radius: ${props => props.theme.CardBorderRadius};
  box-shadow: ${props => props.theme.BoxShadowWidget};
  text-align: center;
  
  :hover {
    cursor: pointer;
  }
`
export const ClientName = styled.h2`
  font-size: 1.3vw;
  font-family: roboto,sans-serif;
  font-weight: 700;
  padding: 0 2%;
  color: ${props => props.theme.MainFontColor};
  height: 15%;
`;

export const ClientSpan = styled.p`
  font-size: 1vw;
  font-family: roboto,sans-serif;
  &.marginTop{
    margin-top: 6%;
  }
  &.marginBottom{
    margin-bottom: 6%;
  }
`;
export const Bold = styled.b`
  font-size: 1vw;
  font-weight:700;
  font-family: roboto,sans-serif;
  &.grey{
    color: ${props => props.theme.DataFontColor};
  }
`;


export const BirthdayContent = styled.div`
  font-size: 1.2vw;
  height: 9%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: roboto,sans-serif;
  &.marginTop{
    margin-top: 4%;
  }
  &.marginBottom{
    margin-bottom: 0;
  }
`;