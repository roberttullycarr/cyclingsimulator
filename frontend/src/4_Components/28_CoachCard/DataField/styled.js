import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${props => `${props.width}%` || "50%"};
  height: ${props => `${props.height}%` || "50%"};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const DataWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
  align-items: flex-end;
`

export const Label = styled.h2`
  width: 10%;
  font-size: 0.8vw;
  color: ${props => props.theme.DataFontColor};
  align-self: flex-end;
  margin: 0 2% 2% 0;
`

export const Line = styled.div`
  height: 2px;
  border: 1px solid ${props => props.theme.AccentFontColor};
  width: 90%;
  margin-bottom: 3%;
`

export const Data = styled.p`
  font-size: 1.2vw;
  width: 78%;
  font-weight: ${props => props.theme.textWeightBold};
  color: ${props => props.theme.ELBlue};
  visibility: ${props => `${props.visibility}` || "visible"};
  align-self: flex-end;
  margin-bottom: 2%;
  overflow: scroll;
  overflow-y: hidden;
  text-overflow: clip;
  
  ::-webkit-scrollbar {
  display: none;  /* Chrome */
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`