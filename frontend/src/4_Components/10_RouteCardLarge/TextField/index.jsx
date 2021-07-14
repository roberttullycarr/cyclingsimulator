import styled from "styled-components";
import PieNivo from "../../../3_Pages/2_Coach/2_5_Results/chart";

const Wrapper = styled.div`
  width: 89.8%;
  margin-top: 1.875vw;
  margin-bottom: 1.875vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  line-height: 5.20vw;
  margin-bottom: 2vw;
  text-align:center;
  vertical-align: middle;
  background-color: ${props => props.theme.ELGreen};
  color: ${props => props.theme.ELWhite};
  font-size: 1.2vw;
  width: 100%;
`


const MiddleText = styled.p`
  width: 100%;
  height: 28vw;
  //pointer-events: none;
  //resize: none;
  //border: none;
  text-align: center;
  word-wrap: break-word;
  //overflow: hidden;
  font-size: 1.2vw;
  font-weight: ${props => props.theme.textWeightBold};
`

const Bottom = styled.h1`
  line-height: 5.20vw;
  margin-top: 2vw;
  margin-bottom: 4vw;
  text-align: center;
  vertical-align: middle;
  background-color: ${props => props.theme.ELGreen};
  color: ${props => props.theme.ELWhite};
  font-size: 1.2vw;
`

const TextField = props => {
    return (
        <Wrapper>
            <Title>Nutrition preparation for the climb</Title>
            <PieNivo route={props.route}/>
        </Wrapper>
    )}

export default TextField