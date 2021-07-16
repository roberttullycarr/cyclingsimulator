import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Stat = styled.div`
  font-weight: ${props => props.theme.textWeightBold};
  color: ${props => props.theme.SlightlyBlack};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  justify-self: center;
  svg {
    height: 2vw;
    margin-bottom: 5%;
    fill: ${props => props.theme.AccentGray};
  }
  h1{
    font-size: 1.2vw;
    color: ${props => props.theme.SlightlyBlack};
  }
  h2{
    font-size: 1.2vw;
    color: ${props => props.theme.AccentGray};
  }
`
// Example: <StatField image={<svg as react component>} stat={'300W'} name={'power'}/

const StatField = (props) => {
    return (
        <Stat>
            <Wrapper>
                {props.image}
                <h1>{props.stat}</h1>
                <h2>{props.name}</h2>
            </Wrapper>
        </Stat>
    )
}

export default StatField