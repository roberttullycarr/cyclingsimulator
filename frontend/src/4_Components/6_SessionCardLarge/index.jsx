import styled from "styled-components";
import Avatar from "../7_Avatar";
import profilePicture from '../../profilepicture.jpg'
import { ReactComponent as Power } from '../../5_Assets/SVG/21_power.svg'
import { ReactComponent as HeartRate } from '../../5_Assets/SVG/22_heartrate.svg'
import { ReactComponent as Weight } from '../../5_Assets/SVG/31_kcal.svg'
import { ReactComponent as SessionNumber } from '../../5_Assets/SVG/14_sessions.svg'
import { ReactComponent as Session } from '../../5_Assets/SVG/25_datetime.svg'

const Container = styled.div`
  aspect-ratio: 7.85 / 1;
  width: 90%;
  height: auto;
  display: flex;
  background: ${props => props.theme.ELWhite};
  border: solid 1px ${props => props.theme.BorderColor};
  border-radius: 5px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  margin-bottom: 1vw;
`

const Athlete = styled.div`
  width: 13%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    color: ${props => props.theme.SlightlyBlack};
    margin-top: 2%;
    font-size: 1.2vw;
  }
`

const Stat = styled.div`
  font-weight: ${props => props.theme.textWeightBold};
  color: ${props => props.theme.SlightlyBlack};
  width: 16.67%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  svg {
    height: 3vw;
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

const AthleteWrapper = styled.div`
  height: 100%;
  width: 70%;
  margin-left: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const SessionCardLarge = () => {
    return (
        <Container>
            <Athlete>
                <AthleteWrapper>
                        <Avatar width={70} color={'#C5C5C5'} user={profilePicture}/>
                        <h1>Thijs Deikere</h1>
                </AthleteWrapper>
            </Athlete>
            <Stat>
                <Wrapper>
                    <Power/>
                    <h1>300W</h1>
                    <h2>Power</h2>
                </Wrapper>
            </Stat>
            <Stat>
                <Wrapper>
                    <HeartRate/>
                    <h1>175 BPM</h1>
                    <h2>Heart Rate</h2>
                </Wrapper>
            </Stat>
            <Stat>
                <Wrapper>
                    <Weight/>
                    <h1>75 KG</h1>
                    <h2>Weight</h2>
                </Wrapper>
            </Stat>
            <Stat>
                <Wrapper>
                    <SessionNumber/>
                    <h1>3</h1>
                    <h2>Session Number</h2>
                </Wrapper>
            </Stat>
            <Stat>
                <Wrapper>
                    <Session/>
                    <h1>July 7th, 2021 9:39 AM</h1>
                    <h2>Session</h2>
                </Wrapper>
            </Stat>
        </Container>
    )
}

export default SessionCardLarge

