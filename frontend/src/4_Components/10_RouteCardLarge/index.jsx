import Title from "../14_Title";
import BaseButton from "../4_ButtonsInputs/Button";
import StatField from "../15_StatsField";
import { ReactComponent as Distance } from '../../5_Assets/SVG/26_distance.svg'
import { ReactComponent as Elevation } from '../../5_Assets/SVG/13_routes.svg'
import { ReactComponent as AverageGrade } from '../../5_Assets/SVG/28_averagegrade.svg'
import { ReactComponent as SteepestGrade } from '../../5_Assets/SVG/29_steepestgrade.svg'
import { ReactComponent as TotalTime } from '../../5_Assets/SVG/30_totaltime.svg'
import { ReactComponent as AverageSpeed } from '../../5_Assets/SVG/32_avaragespeed.svg'
import Table from "./Table";
import TextField from "./TextField";
import React, { useState } from "react";
import {ArrowButton, BottomWrapper, Card, Container, Line, Name, Stats, Wrapper, WrapperTop} from "./styled";


const RoutCardLarge = props => {
    const [expanded, setExpanded] = useState('hidden')
    // destructuring props
    const { name, average_grade, elevation, steepest_km, total_distance_in_km, total_time,
        average_speed, avatar, segments} = props.route

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
                    <BaseButton text={'Generate PDF'} height={100} width={12} fontSize={'1.2'}/>
                </WrapperTop>
                <Wrapper>
                    <img src={avatar} alt='route-avatar'/>
                    <Stats>
                        <StatField image={<Distance/>} stat={total_distance_in_km} name={'Distance in KM'}/>
                        <StatField image={<Elevation/>} stat={elevation} name={'Elevation'}/>
                        <StatField image={<AverageGrade/>} stat={`${average_grade} %`} name={'Average Grade'}/>
                        <Line/>
                        <StatField image={<SteepestGrade/>} stat={`${steepest_km} %`} name={'Steepest Grade'}/>
                        <StatField image={<TotalTime/>} stat={total_time} name={'Total Time'}/>
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

