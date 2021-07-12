import styled from "styled-components";
import Avatar from "../7_Avatar";
import profilePicture from '../../profilepicture.jpg'
import { ReactComponent as Power } from '../../5_Assets/SVG/21_power.svg'
import { ReactComponent as HeartRate } from '../../5_Assets/SVG/22_heartrate.svg'
import { ReactComponent as Weight } from '../../5_Assets/SVG/31_kcal.svg'
import { ReactComponent as SessionNumber } from '../../5_Assets/SVG/14_sessions.svg'
import { ReactComponent as Session } from '../../5_Assets/SVG/25_datetime.svg'
import StatField from "../16_StatsField";

const Container = styled.div`
  aspect-ratio: 7.85 / 1;
  width: 87.5vw;
  height: auto;
  display: flex;
  background: ${props => props.theme.ELWhite};
  border: solid 1px ${props => props.theme.BorderColor};
  border-radius: 3px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
`

const AthleteWrapper = styled.div`
  height: 100%;
  width: 10%;
  margin-left: 2.5%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    color: ${props => props.theme.SlightlyBlack};
    margin-top: 2%;
    font-size: 1.2vw;
  }
`

const Wrapper = styled.div`
  width: 85%;
  display: flex;
`

const SessionCardLarge = () => {
    return (
        <Container>
            <AthleteWrapper>
                <Avatar width={70} color={'#C5C5C5'} user={profilePicture}/>
                <h1>Thijs Deikere</h1>
            </AthleteWrapper>
            <Wrapper>
            <StatField image={<Power/>} stat={'300W'} name={'Power'}/>
            <StatField image={<HeartRate/>} stat={'175 BPM'} name={'Heart Rate'}/>
            <StatField image={<Weight/>} stat={'75 KG'} name={'Weight'}/>
            <StatField image={<SessionNumber/>} stat={'3'} name={'Session Number'}/>
            <StatField image={<Session/>} stat={'July 7th, 2021 9:39 AM'} name={'Session'}/>
            </Wrapper>
        </Container>
    )
}

export default SessionCardLarge

