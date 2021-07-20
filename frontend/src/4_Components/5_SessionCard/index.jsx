import React from "react";
import styled from "styled-components";
import {ReactComponent as PowerIcon } from '../../5_Assets/SVG/21_power.svg'
import {ReactComponent as HeartRateIcon } from '../../5_Assets/SVG/22_heartrate.svg'
import {ReactComponent as ClockIcon } from '../../5_Assets/SVG/24_clock.svg'
import {ReactComponent as DateIcon } from '../../5_Assets/SVG/23_date.svg'
import Avatar from "../7_Avatar";
import {useHistory} from "react-router-dom";

const ContentCard = styled.div`
  width: 100%;
  aspect-ratio: 20 / 1;
  background: ${props => props.theme.CardBackColor};
  box-shadow: ${props => props.theme.BoxShadowWidget};
  display: flex;
  justify-content: space-around;
  border: ${props => props.theme.CardBorder};
  border-radius: 5px;
  margin-bottom: 1.2vw;
  
  :hover {
    cursor: pointer;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 16%;
`;


const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
    height: 1.8vw;
    fill: ${props => props.theme.ELBlue};
  }
`;

const TextCard = styled.h1`
  margin-left: 1vw;
  font-size: 1.2vw;
  white-space: nowrap;
  color: ${props => props.theme.SlightlyBlack};
`;


const SessionCard = (props) => {
    const history = useHistory()
    // destructuring props
    const { id, client, pat, heart_rate, created } = props.session

    const simulateSession = () => {
        history.push(`/clients/results/${id}`)
    }

    return (
        <ContentCard onClick={simulateSession}>
            <TopWrapper>
                <Avatar width={25} user={client.avatar}/>
                <TextCard>{client['full_name'] ? client['full_name'] : "Client"}</TextCard>
            </TopWrapper>

            <WrapperDiv>
                <PowerIcon/>
                <TextCard>{pat ? `${pat}w` : "Anaebolic Threshold"}</TextCard>
            </WrapperDiv>

            <WrapperDiv>
                <HeartRateIcon/>
                <TextCard>{heart_rate ? `${heart_rate} BPM` : "Heart Rate"}</TextCard>
            </WrapperDiv>

            <WrapperDiv>
                <DateIcon/>
                <TextCard>{created ? created.substr(0, created.indexOf(' ')) : "Date"}</TextCard>
            </WrapperDiv>

            <WrapperDiv>
                <ClockIcon/>
                <TextCard>{created ? created.substr(created.indexOf(' ')) : "Time"}</TextCard>
            </WrapperDiv>

        </ContentCard>
    )
};
export default SessionCard;