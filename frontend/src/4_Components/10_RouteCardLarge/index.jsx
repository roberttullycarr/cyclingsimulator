import styled from "styled-components";
import Title from "../14_Title";
import BaseButton from "../4_ButtonsInputs/Button";
import stelvio from "../../5_Assets/JPG/stelvio_06_hairpin.jpeg"
import StatField from "../15_StatsField";
import { ReactComponent as Distance } from '../../5_Assets/SVG/26_distance.svg'
import { ReactComponent as Elevation } from '../../5_Assets/SVG/13_routes.svg'
import { ReactComponent as AverageGrade } from '../../5_Assets/SVG/28_averagegrade.svg'
import { ReactComponent as SteepestGrade } from '../../5_Assets/SVG/29_steepestgrade.svg'
import { ReactComponent as TotalTime } from '../../5_Assets/SVG/30_totaltime.svg'
import { ReactComponent as Calories } from '../../5_Assets/SVG/31_kcal.svg'
import { ReactComponent as AverageSpeed } from '../../5_Assets/SVG/32_avaragespeed.svg'
import { ReactComponent as ClimbDate } from '../../5_Assets/SVG/25_datetime.svg'
import arrowThin from '../../5_Assets/SVG/41_arrow.svg'
import Table from "./Table";
import TextField from "./TextField";
import { useState } from "react";

const Container = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
`

const Card = styled.div`
  position: relative;
  aspect-ratio: 4.05 / 1;
  width: 87.5vw;
  height: ${props => (props.expand == 'hidden') ? '23vw' : '115vw'};
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
  transform: ${props => (props.expand == 'hidden') ? '0' : 'rotate(0.5turn)'};
  transition: all 0.7s linear;
`


const RoutCardLarge = () => {

    const [expanded, setExpanded] = useState('hidden')

    const onClickHandler = (event) => {
        event.preventDefault();
        if (expanded === 'visible'){
            setExpanded('hidden')
        }
        else{
            setExpanded('visible')
        }
    }

    return (
        <Container>
            <Title text={'Result'}/>
            <Card expand={expanded}>
                <WrapperTop>
                    <Name>Stelvio</Name>
                    <BaseButton text={'Generate PDF'} height={'2.78vw'} width={10} fontSize={'1.2'}/>
                </WrapperTop>
                <Wrapper>
                    <img src={stelvio}/>
                    <Stats>
                        <StatField image={<Distance/>} stat={'300W'} name={'Distance'}/>
                        <StatField image={<Elevation/>} stat={'300W'} name={'Elevation'}/>
                        <StatField image={<AverageGrade/>} stat={'300W'} name={'Average Grade'}/>
                        <StatField image={<SteepestGrade/>} stat={'300W'} name={'Steepest Grade'}/>
                        <Line/>
                        <StatField image={<TotalTime/>} stat={'300W'} name={'Total Time'}/>
                        <StatField image={<Calories/>} stat={'300W'} name={'Calories'}/>
                        <StatField image={<AverageSpeed/>} stat={'300W'} name={'Average Speed'}/>
                        <StatField image={<ClimbDate/>} stat={'300W'} name={'Climb Date'}/>
                    </Stats>
                </Wrapper>
                <BottomWrapper expand={expanded}>
                    <Table/>
                    <TextField/>
                </BottomWrapper>
                <ArrowButton onClick={onClickHandler} expand={expanded}/>
            </Card>
        </Container>
    )
}

export default RoutCardLarge;

