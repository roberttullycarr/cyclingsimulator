import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.BackgroundLightGrey};
`;

