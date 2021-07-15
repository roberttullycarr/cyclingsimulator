import styled from "styled-components";
import Avatar from "../7_Avatar";
import { ReactComponent as Power } from '../../5_Assets/SVG/21_power.svg'
import { ReactComponent as HeartRate } from '../../5_Assets/SVG/22_heartrate.svg'
import { ReactComponent as Weight } from '../../5_Assets/SVG/31_kcal.svg'
import { ReactComponent as SessionNumber } from '../../5_Assets/SVG/14_sessions.svg'
import { ReactComponent as Session } from '../../5_Assets/SVG/25_datetime.svg'
import StatField from "../15_StatsField";

const Container = styled.div`
  aspect-ratio: 7.85 / 1;
  width: 85%;
  height: auto;
  display: flex;
  background: ${props => props.theme.ELWhite};
  border: solid 1px ${props => props.theme.BorderColor};
  border-radius: 5px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  margin-top: 2vw;
  margin-bottom: 2vw;
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

const SessionCardLarge = props => {
    // destructuring props
    const { avatar, full_name, latest_session } = props.profile
    const { pat, heart_rate, weight, coach, created } = latest_session

    return (
        <Container>
            <AthleteWrapper>
                <Avatar width={70} color={'#C5C5C5'} user={avatar}/>
                <h1>{full_name}</h1>
            </AthleteWrapper>
            <Wrapper>
                <StatField image={<Power/>} stat={`${pat} W`} name={'Power'}/>
                <StatField image={<HeartRate/>} stat={`${heart_rate} BPM`} name={'Heart Rate'}/>
                <StatField image={<Weight/>} stat={`${weight} KG`} name={'Weight'}/>
                <StatField image={<SessionNumber/>} stat={coach['full_name']} name={'Coach'}/>
                <StatField image={<Session/>} stat={created} name={'Session'}/>
            </Wrapper>
        </Container>
    )
}

export default SessionCardLarge

