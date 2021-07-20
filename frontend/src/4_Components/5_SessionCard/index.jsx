import React from "react";
import ClockIcon from "../../5_Assets/SVG/24_clock.svg";
import HeartRateIcon from "../../5_Assets/SVG/22_heartrate.svg";
import {ReactComponent as Power } from '../../5_Assets/SVG/21_power.svg'
import DateIcon from "../../5_Assets/SVG/23_date.svg";
import Avatar from "../7_Avatar";
import {useHistory} from "react-router-dom";
import {ContentCard, ImgSVG, PowerSVG, PowerText, TextCard, UserInfo, WrapperDiv} from "./styled";


const SessionCard = (props) => {
    const history = useHistory()
    // destructuring props
    const { id, client, pat, heart_rate, created } = props.session

    const simulateSession = () => {
        history.push(`/clients/results/${id}`)
    }

    return (
        <ContentCard onClick={simulateSession}>
            <UserInfo>
                <Avatar width={20} marginLeft={"0"} marginRight={"0"} user={client.avatar}/>
                <TextCard>{client['full_name'] ? client['full_name'] : "Client"}</TextCard>
            </UserInfo>

            <WrapperDiv>
                <PowerSVG><Power/></PowerSVG>
                <PowerText>{pat ? `${pat}w` : "Anaebolic Threshold"}</PowerText>
            </WrapperDiv>

            <WrapperDiv>
                <div><ImgSVG src={HeartRateIcon} alt="heartrate icon"/></div>
                <TextCard>{heart_rate ? `${heart_rate} BPM` : "Heart Rate"}</TextCard>
            </WrapperDiv>

            <WrapperDiv>
                <div><ImgSVG src={DateIcon} alt="date icon"/></div>
                <TextCard>{created ? created.substr(0, created.indexOf(' ')) : "Date"}</TextCard>
            </WrapperDiv>

            <WrapperDiv>
                <div><ImgSVG src={ClockIcon} alt="clock icon"/></div>
                <TextCard>{created ? created.substr(created.indexOf(' ')) : "Time"}</TextCard>
            </WrapperDiv>

        </ContentCard>
    )
};
export default SessionCard;