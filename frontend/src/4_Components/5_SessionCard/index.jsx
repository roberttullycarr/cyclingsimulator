import React from "react";
import styled from "styled-components";
import ClockIcon from "../../5_Assets/SVG/24_clock.svg";
import HeartRateIcon from "../../5_Assets/SVG/22_heartrate.svg";
import PowerIcon from "../../5_Assets/SVG/21_power.svg";
import DateIcon from "../../5_Assets/SVG/23_date.svg";
import Avatar from "../7_Avatar";
import {useHistory} from "react-router-dom";

const ContentCard = styled.div`
  width: 100%;
  background: ${props => props.theme.CardBackColor};
  box-shadow: ${props => props.theme.BoxShadowWidget};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
  padding: .4vw 0;
  border: ${props => props.theme.CardBorder};
  border-radius: 5px;
  margin-bottom: 1.2vw;
  
  :hover {
    cursor: pointer;
  }
`;
const ImgSVG = styled.img`
  width: 3vh;
  filter: invert(.5);
  fill: ${props => props.theme.MBGreen};
`;
const PowerSVG = styled.img`
  width: 1.6vh;
  filter: invert(.5);
  fill: ${props => props.theme.MBGreen};
`;
const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
`;
const TextCard = styled.h1`
  margin-left: 14px;
  font-size: 1.2vw;
  color: ${props => props.theme.MainFontColor};
`;
const PowerText = styled.h1`
  color: ${props => props.theme.MainFontColor};
  margin-left: 11px;
  font-size: 1.2vw;
`;




const SessionCard = (props) => {
    const history = useHistory()
    // destructuring props
    const { id, client, pat, heart_rate, created } = props.session

    const simulateSession = () => {
        history.push(`/results/${id}`)
    }

    return (
        <ContentCard onClick={simulateSession}>
            <WrapperDiv>
                <Avatar width={20} marginLeft={"0"} marginRight={"0"} user={client.avatar}/>
                <TextCard>{client['full_name'] ? client['full_name'] : "Client"}</TextCard>
            </WrapperDiv>

            <WrapperDiv>
                <div><PowerSVG src={PowerIcon} alt="power icon"/></div>
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