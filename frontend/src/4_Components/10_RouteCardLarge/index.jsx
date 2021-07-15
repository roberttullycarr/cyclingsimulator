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
import Table from "./Table";
import TextField from "./TextField";
import React, { useState } from "react";
import {Card, Container, Name, Stats, Wrapper, WrapperTop, Line, BottomWrapper, ArrowButton} from "./styles";


const RoutCardLarge = props => {
    const [expanded, setExpanded] = useState('hidden')
    // destructuring props
    const { name, average_grade, elevation, steepest_km, total_distance_in_km, total_time,
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

    return (
        <Container>
            <Title text={'Result'}/>
            <Card expand={expanded}>
                <WrapperTop>
                    <Name>{name}</Name>
                    <BaseButton text={'Generate PDF'} height={'2.78vw'} width={10} fontSize={'1.2'}/>
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
                </Wrapper>
                <BottomWrapper expand={expanded}>
                    <Table segments={segments}/>
                    <TextField route={props.route}/>
                </BottomWrapper>
                <ArrowButton onClick={onClickHandler} expand={expanded}/>
            </Card>
        </Container>
    )
}

export default RoutCardLarge;

