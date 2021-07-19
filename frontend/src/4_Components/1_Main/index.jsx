import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  // height: auto;
  min-height: 100vh;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.ELWhite};
`;


export const Body = styled.div`
  position: relative;
  margin-left: 4.5%;
  width: 95.5%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4vw;
`

export const SectionWrapper = styled.div`
  width: ${props => props.theme.CardWidthPercent};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`