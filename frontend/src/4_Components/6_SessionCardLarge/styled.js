import styled from "styled-components";

export const Container = styled.div`
  aspect-ratio: 7.85 / 1;
  width: 85%;
  height: auto;
  display: flex;
  background: ${props => props.theme.CardBackColor};
  border: ${props => props.theme.CardBorder};
  border-radius: ${props => props.theme.CardBorderRadius};
  box-shadow: ${props => props.theme.BoxShadowWidget};
  margin-top: 2vw;
  margin-bottom: 2vw;
`

export const AthleteWrapper = styled.div`
  height: 100%;
  width: 10%;
  margin-left: 2.5%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    color: ${props => props.theme.MBBackground};
    margin-top: 2%;
    font-size: 1.2vw;
  }
  
  :hover {
    cursor: pointer;
  }
`

export const Wrapper = styled.div`
  width: 85%;
  display: flex;
`