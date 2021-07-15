import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import SessionCard from "../../../4_Components/5_SessionCard";
import SessionCardLarge from "../../../4_Components/6_SessionCardLarge";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchRecentSessions} from "../../../2_Store/Fetches/recent_sessions";

const Overview = () => {
    const dispatch = useDispatch()
    const recentSessions = useSelector(state => state.recentSessions)

    useEffect(() => {
        dispatch(fetchRecentSessions())
    }, [dispatch])

    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'Overview'}/>
                {recentSessions.length ? recentSessions.map(session => <SessionCard session={session}/>) : <p>Loading...</p>}
            </Body>
        </Main>
    )
}

export default Overview

