import React from "react";
import styled from "styled-components";
//import { useHistory, useLocation } from "react-router-dom";
import ClockIcon from "../../5_Assets/SVG/24_clock.svg";
import HeartRateIcon from "../../5_Assets/SVG/22_heartrate.svg";
import PowerIcon from "../../5_Assets/SVG/21_power.svg";
import DateIcon from "../../5_Assets/SVG/23_date.svg";
import Avatar from "../7_Avatar";

const ContentCard = styled.div`
    width:90%;
    background: white;
    box-shadow: ${props => props.theme.BoxShadowWidget};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
    padding: 1.7vh 0;
    border-radius:5px;
`;
const ImgSVG = styled.img`
    width: 3vh;
    filter: invert(.5);
`;
const PowerSVG = styled.img`
    width: 1.6vh;
    filter: invert(.5);
`;
const WrapperDiv = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
`;
const TextCard = styled.p`
    margin-left: 14px;
    font-size: 1.4vw;
`;
const PowerText = styled.p`
    margin-left: 11px;
    font-size: 1.4vw;
`;
const DivImg = styled.div`
`;



const SessionCard = (props) => {

    return (
    <ContentCard>
        <WrapperDiv>
            <Avatar width={20} marginLeft={"0"} marginRight={"0"}/>
            <TextCard>{props.username ? props.username : "no name"}</TextCard>
        </WrapperDiv>
        
        <WrapperDiv>
            <DivImg><PowerSVG src={PowerIcon} alt="power icon"/></DivImg>
            <PowerText>{props.power ? props.power : "300w"}</PowerText>
        </WrapperDiv>
        <WrapperDiv>
            <DivImg><ImgSVG src={HeartRateIcon} alt="heartrate icon"/></DivImg>
            <TextCard>{props.power ? props.power : "175 bpm"}</TextCard>
        </WrapperDiv>
        <WrapperDiv>
            <DivImg><ImgSVG src={DateIcon} alt="date icon"/></DivImg>
            <TextCard>{props.power ? props.power : "July 7th, 2021"}</TextCard>
        </WrapperDiv>
        <WrapperDiv>
            <div><ImgSVG src={ClockIcon} alt="clock icon"/></div>
            <TextCard>{props.power ? props.power : "9:39am"}</TextCard>
        </WrapperDiv>
            
    </ContentCard>
    )
};
export default SessionCard;