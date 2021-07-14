import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import {useDispatch, useSelector} from "react-redux";
import SessionCardLarge from "../../../4_Components/6_SessionCardLarge";
import React, {useEffect} from "react";
import {fetchClientDetails} from "../../../2_Store/Fetches/client_details";
import {fetchClientRecentSessions} from "../../../2_Store/Fetches/user_specific_sessions";
import SessionCard from "../../../4_Components/5_SessionCard";
import LineNivo from "./chart";
import NewSession from "../../../4_Components/27_NewSession";


const AthleteOverview = props => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.clientDetails)
    const recentSessions = useSelector(state => state.clientRecentSessions)

    useEffect(() => {
        const client_id = props.match.params.index
        dispatch(fetchClientDetails(client_id))
        dispatch(fetchClientRecentSessions(client_id))
    }, [dispatch])

    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={`ATHLETE - ${profile['full_name']}`}/>
                { Object.keys(profile).length ?
                    <>
                        <SessionCardLarge profile={profile}/>}
                        <LineNivo sessions={recentSessions}/>
                        <NewSession client={profile}/>
                        { recentSessions.map(session => <SessionCard session={session}/>) }
                    </>
                    : 'Loading...' }
            </Body>
        </Main>
    )
}

export default AthleteOverview


