import Avatar from "../7_Avatar";
import { ReactComponent as Power } from '../../5_Assets/SVG/21_power.svg'
import { ReactComponent as HeartRate } from '../../5_Assets/SVG/22_heartrate.svg'
import { ReactComponent as Whistle } from '../../5_Assets/SVG/whistle.svg'
import { ReactComponent as Scale } from '../../5_Assets/SVG/body-weight-scales.svg'
import { ReactComponent as Session } from '../../5_Assets/SVG/25_datetime.svg'
import StatField from "../15_StatsField";
import {useHistory} from "react-router-dom";
import {AthleteWrapper, Container, Wrapper} from "./styled";


const SessionCardLarge = props => {
    const history = useHistory();
    // destructuring props
    const { avatar, full_name, id } = props.profile
    const { pat, heart_rate, weight, coach, created } = props.session

    return (
        <Container>
            <AthleteWrapper onClick={() => history.push(`/clients/${id}/`)}>
                <Avatar width={70} color={'#C5C5C5'} user={avatar}/>
                <h1>{full_name}</h1>
            </AthleteWrapper>
            <Wrapper>
                <StatField image={<Power/>} stat={`${pat} W`} name={'Power'}/>
                <StatField image={<HeartRate/>} stat={`${heart_rate} BPM`} name={'Heart Rate'}/>
                <StatField image={<Scale/>} stat={`${weight} KG`} name={'Weight'}/>
                <StatField image={<Whistle/>} stat={coach['full_name']} name={'Coach'}/>
                <StatField image={<Session/>} stat={created} name={'Session'}/>
            </Wrapper>
        </Container>
    )
}

export default SessionCardLarge

