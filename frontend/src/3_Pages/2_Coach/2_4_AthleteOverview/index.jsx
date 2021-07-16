import {Body, Main} from "../../../4_Components/1_Main";
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
                        <UserInfoCard user={profile}/>
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


