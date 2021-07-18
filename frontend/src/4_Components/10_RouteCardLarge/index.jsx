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
import React, { useState } from "react";
import jsPDF from "jspdf";
import domtoimage from 'dom-to-image';
import PieNivo from "../../3_Pages/2_Coach/2_5_Results/chart";
import { ArrowButton, BottomWrapper, Card, Container, Line, Name, Stats, StatsWrapper, InfoWrapper, WrapperTop, TextWrapper,
    Logo } from "./styled";
import logo from '../../5_Assets/PNG/energylab.png';
import TextField from "./TextField";

const RoutCardLarge = props => {
    const [expanded, setExpanded] = useState('hidden')
    const [pdfView, setPdfView] = useState(null)
    // destructuring props
    const { id, name, average_grade, elevation, steepest_km, total_distance_in_km, total_time,
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

    const generatePDF = () => {
        setPdfView('hidden')
        domtoimage.toPng(document.getElementById(`${id}`), {}).then(imgInfo => {
            const img = new Image();
            img.src = imgInfo;
            const pdf = new jsPDF('l');
            pdf.addImage(img, 0, 0, 300, 185, null, "FAST"); // in landscape
            // pdf.addImage(img, 0, 0, 210, 130, null, "FAST"); // in portait
            pdf.save(`${props.client}_${name}.pdf`);
            setPdfView(null)
        });
    }



    return (
        <Container>
            <Title text={'Result'}/>
            <Card id={id} expand={expanded} whilePDF={pdfView}>
                <WrapperTop>
                    <Name>{name}</Name>
                    <BaseButton action={generatePDF} text={'Generate PDF'} height={100} width={12} fontSize={'1.2'}
                                visibility={pdfView}/>
                    <Logo src={logo} whilePDF={pdfView}/>
                </WrapperTop>
                <StatsWrapper>
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
                </StatsWrapper>
                <InfoWrapper>
                    <TextWrapper>
                        <TextField data={props.route} fullName={props.profile['full_name']}/>
                    </TextWrapper>
                    <PieNivo route={props.route} />
                </InfoWrapper>
                <BottomWrapper expand={expanded}>
                    <Table segments={segments}/>
                </BottomWrapper>
                {(pdfView === 'hidden') ? null: <ArrowButton onClick={onClickHandler} expand={expanded}/>}
            </Card>
        </Container>
    )
}

export default RoutCardLarge;

