import styled from "styled-components";
import Avatar from "../7_Avatar";
import {defaultTheme} from "../../6_Styles";
import power from '../../5_Assets/SVG/21_power.svg'

const Container = styled.div`
  aspect-ratio: 7.85 / 1;
  width: 87.5vw;
  height: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background: ${props => props.theme.ELWhite};
  place-items: center;
  place-content: center;
`

const Athlete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Stat = styled.div`
    font-weight: ${props => props.theme.textWeightBold};
    
    img {
      height: 42px;
    }
    h1{
      font-size: ${props => props.theme.textSizePostName};
    }
    h2{
      font-size: ${props => props.theme.textSizePostName};
      color: ${props => props.theme.AccentGray};
    }
`

const SessionCardLarge = () => {
    return (
        <Container>
            <Athlete>
                <Avatar height={110} color={'AccentGray'}/>
                <h1>Thijs Deikere</h1>
            </Athlete>
            <Stat>
                <img src={power}/>
                <h1>300W</h1>
                <h2>Power</h2>
            </Stat>
            <Stat>
                <img src={power}/>
                <h1>175 BPM</h1>
                <h2>Heart Rate</h2>
            </Stat>
            <Stat>
                <img src={power}/>
                <h1>75 KG</h1>
                <h2>Weight</h2>
            </Stat>
            <Stat>
                <img src={power}/>
                <h1>3</h1>
                <h2>Session Number</h2>
            </Stat>
            <Stat>
                <img src={power}/>
                <h1>July 7th, 2021 9:39 AM</h1>
                <h2>Session</h2>
            </Stat>
        </Container>
    )
}

export default SessionCardLarge

