import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  // height: auto;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.BackgroundLightGrey};
`;


export const Body = styled.div`
  margin-left: 4.5%;
  width: 95.5%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
