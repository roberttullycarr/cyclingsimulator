import styled from "styled-components";

export const Wrapper = styled.div`
  width: 89.8%;
  margin-top: 1.875vw;
  margin-bottom: 1.875vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  line-height: 5.20vw;
  margin-bottom: 2vw;
  text-align:center;
  vertical-align: middle;
  background-color: ${props => props.theme.ELGreen};
  color: ${props => props.theme.ELWhite};
  font-size: 1.2vw;
  width: 100%;
`