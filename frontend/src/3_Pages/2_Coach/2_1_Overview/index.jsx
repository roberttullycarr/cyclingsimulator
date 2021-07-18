import {Body, Main, SectionWrapper} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import SessionCard from "../../../4_Components/5_SessionCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchRecentSessions} from "../../../2_Store/Fetches/recent_sessions";
import CalendarNivo from "./chart";
import {fetchYearToDateSessions} from "../../../2_Store/Fetches/year_to_date_sessions";
import CoachCard from "../../../4_Components/28_CoachCard";
import Title from "../../../4_Components/14_Title";


const Overview = () => {
    const dispatch = useDispatch()
    const recentSessions = useSelector(state => state.recentSessions)
    const yearToDateSessions = useSelector(state => state.yearToDateSessions)
    const loggedInUser = useSelector(state => state.myInfo)

    useEffect(() => {
        dispatch(fetchRecentSessions())
        dispatch(fetchYearToDateSessions())
    }, [dispatch])

    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'DASHBOARD'}/>
                <SectionWrapper>
                    <Title text={'Edit Your Info'}/>
                    <CoachCard user={loggedInUser} type={"MY_INFO"}/>
                </SectionWrapper>
                <SectionWrapper>
                    <Title text={`Total Sessions - ${new Date().getFullYear()}`}/>
                    {yearToDateSessions.length ? <CalendarNivo sessions={yearToDateSessions}/> : 'Loading...'}
                </SectionWrapper>
                <SectionWrapper>
                    <Title text={'Recent Sessions'}/>
                    {recentSessions.length ? recentSessions.map(session => <SessionCard session={session}/>) : <p>Loading...</p>}
                </SectionWrapper>
            </Body>
        </Main>
    )
}

export default Overview

