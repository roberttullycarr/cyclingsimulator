import {Body, Main, SectionWrapper} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchClientDetails} from "../../../2_Store/Fetches/client_details";
import {fetchClientRecentSessions} from "../../../2_Store/Fetches/user_specific_sessions";
import SessionCard from "../../../4_Components/5_SessionCard";
import LineNivo from "./chart";
import NewSession from "../../../4_Components/27_NewSession";
import UserInfoCard from "../../../4_Components/26_UserInfoCard";
import {useHistory} from "react-router";
import CoachCard from "../../../4_Components/28_CoachCard";
import Title from "../../../4_Components/14_Title";


const AthleteOverview = props => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.clientDetails)
    const recentSessions = useSelector(state => state.clientRecentSessions)
    const history = useHistory();
    const token = useSelector(state => state.token);

    useEffect(() => {
        const client_id = props.match.params.index
        dispatch(fetchClientDetails(client_id))
        dispatch(fetchClientRecentSessions(client_id))

        if(!token)history.push("/signin")

    }, [dispatch, props.match.params.index, token, history])

    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={`ATHLETE - ${profile['full_name']}`}/>
                { Object.keys(profile).length ?
                    <>
                        <SectionWrapper>
                            <Title text={"Athlete Info"}/>
                            <CoachCard user={profile} type={"CLIENTS"} />
                        </SectionWrapper>
                        <SectionWrapper>
                            <Title text={"Recent Sessions - Graph"}/>
                            <LineNivo sessions={recentSessions}/>
                        </SectionWrapper>
                        <NewSession client={profile}/>
                        <SectionWrapper>
                            <Title text={"Recent Sessions"}/>
                            { recentSessions.map(session => <SessionCard session={session}/>) }
                        </SectionWrapper>
                    </>
                    : 'Loading...' }
            </Body>
        </Main>
    )
}

export default AthleteOverview


