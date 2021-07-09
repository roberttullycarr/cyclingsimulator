import {Body, Main} from "../../../4_Components/1_Main";
import {useEffect, useState} from "react";
import {fetchCyclistData} from "../../../2_Store/Fetches/cyclist_data";
import {useDispatch} from "react-redux";
import Avatar from "../../../4_Components/7_Avatar";
import MenuBar from "../../../4_Components/3_MenuBar";
import BaseButton from "../../../4_Components/4_Buttons";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import styled from "styled-components";
import power from "../../../5_Assets/SVG/21_power.svg"

const SessionCardSmall = styled.div`
display: flex;
width: 90%;
height: 6vw;
background: ${props => props.theme.ELWhite};
border: 1px solid #BDBDBD;
border-radius: 5px;
box-shadow: ${props => props.theme.BoxShadowWidget};
`

const SessionSection = styled.div`
height: 100%;
width: 20%;
display: flex;
justify-content: center;
align-items: center;
`
const DataDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`

const SVGDiv = styled.div`
width: 30%;
display: flex;
justify-content: flex-end;
align-items: center;
`

const SVGImg = styled.img`
height: 40%;
`

const TextDiv = styled.p`
width: 70%;
display: flex;
justify-content: flex-start;
align-items: center;
font-size: 1.2vw;
padding-left: 10%;
background-color: #FFFFFF;
`

const Overview = () => {
    const dispatch = useDispatch();
    const data = useState()

    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'OVERVIEW'}/>

            </Body>
        </Main>
    )
}

export default Overview

