import styled from "styled-components";
import Title from "../14_Title";
import BaseButton from "../4_ButtonsInputs/Button";
import StatField from "../15_StatsField";
import { ReactComponent as Distance } from '../../5_Assets/SVG/26_distance.svg'
import { ReactComponent as Elevation } from '../../5_Assets/SVG/13_routes.svg'
import { ReactComponent as AverageGrade } from '../../5_Assets/SVG/28_averagegrade.svg'
import { ReactComponent as SteepestGrade } from '../../5_Assets/SVG/29_steepestgrade.svg'
import { ReactComponent as TotalTime } from '../../5_Assets/SVG/30_totaltime.svg'
import { ReactComponent as Calories } from '../../5_Assets/SVG/31_kcal.svg'
import { ReactComponent as AverageSpeed } from '../../5_Assets/SVG/32_avaragespeed.svg'
import arrowThin from '../../5_Assets/SVG/41_arrow.svg'
import Table from "./Table";
import TextField from "./TextField";
import React, { useState } from "react";
import jsPDF from "jspdf";
import domtoimage from 'dom-to-image';
import PieNivo from "../../3_Pages/2_Coach/2_5_Results/chart";

const Container = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
`

const Card = styled.div`
  position: relative;
  aspect-ratio: 4.05 / 1;
  width: 87.5vw;
  height: ${props => (props.expand === 'hidden') ? '40vw' : '115vw'};
  transition: all 0.7s linear;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.ELWhite};
  border: solid 1px ${props => props.theme.BorderColor};
  border-radius: 3px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  button{
    margin-right: 2%;
    margin-bottom: 2%;
  }
`

const Name = styled.h1`
  font-size: 1.2vw;
`

const WrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.875vw;
  height: 2.78vw;
  padding-left: 1.875vw;
`

const Wrapper = styled.div`
  display: flex;
  padding-left: 1.875vw;
  img{
    width: 16vw;
    height: 16vw;
    object-position: left bottom;
    border-radius: 5px;
  }
`

const BottomWrapper = styled.div`
  width: 100%;
  margin-top: 1.875vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: ${props => props.expand};
  transition: all 0.7s linear;
  overflow: hidden;
`

const Stats = styled.div`
  height: 16vw;
  width: 65%;
  margin-left: 2%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 2px 1fr;
  align-items: center;
  .StatField{
    align-self: center;
    justify-self: center;
  }
`

const Line = styled.div`
  border: solid 1px ${props => props.theme.BorderColor};
  grid-row: 2 / 2;
  grid-column: 1 / 5;
`

const ArrowButton = styled.button`
  background-image: url(${arrowThin});
  background-size: cover;
  width: 2.812vw;
  height: 1.458vw;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
  position: absolute;
  z-index: 2;
  bottom: 0px;
  right: 0px;
  transform: ${props => (props.expand === 'hidden') ? '0' : 'rotate(0.5turn)'};
  transition: all 0.7s linear;
`


const RoutCardLarge = props => {
    const [expanded, setExpanded] = useState('hidden')
    const [pdfView, setPdfView] = useState(null)
    // destructuring props
    const { id, name, average_grade, elevation, steepest_km, total_distance_in_km, total_time,
        average_speed, total_kcal, avatar, segments} = props.route

    const onClickHandler = (event) => {
        event.preventDefault();
        if (expanded === 'visible'){
            setExpanded('hidden')
        }
        else{
            setExpanded('visible')
        }
    }

    const generatePDF = () => {
        setPdfView('hidden')
        domtoimage.toPng(document.getElementById(`${id}`), {}).then(imgInfo => {
            const img = new Image();
            img.src = imgInfo;
            const pdf = new jsPDF("landscape", "px",[1000, 400]);
            pdf.addImage(img, 70, 10, undefined, undefined, null, "FAST");
            pdf.save(`${new Date().toISOString()}.pdf`);
            setPdfView(null)
        });
    }

    return (
        <Container>
            <Title text={'Result'}/>
            <Card id={id} expand={expanded}>
                <WrapperTop>
                    <Name>{name}</Name>
                    <BaseButton action={generatePDF} visibility={pdfView}
                                text={'Generate PDF'} height={'2.78vw'} width={10} fontSize={'1.2'}/>
                </WrapperTop>
                <Wrapper>
                    <img src={avatar} alt='route-avatar'/>
                    <Stats>
                        <StatField image={<Distance/>} stat={total_distance_in_km} name={'Distance in KM'}/>
                        <StatField image={<Elevation/>} stat={elevation} name={'Elevation'}/>
                        <StatField image={<AverageGrade/>} stat={`${average_grade} %`} name={'Average Grade'}/>
                        <StatField image={<SteepestGrade/>} stat={`${steepest_km} %`} name={'Steepest Grade'}/>
                        <Line/>
                        <StatField image={<TotalTime/>} stat={total_time} name={'Total Time'}/>
                        <StatField image={<Calories/>} stat={total_kcal} name={'Calories'}/>
                        <StatField image={<AverageSpeed/>} stat={average_speed} name={'Average Speed in KM'}/>
                    </Stats>
                    <PieNivo route={props.route}/>
                </Wrapper>
                <BottomWrapper expand={expanded}>
                    <Table segments={segments}/>
                </BottomWrapper>
                <ArrowButton onClick={onClickHandler} expand={expanded}/>
            </Card>
        </Container>
    )
}

export default RoutCardLarge;

