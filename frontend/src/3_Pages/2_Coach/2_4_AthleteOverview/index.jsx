import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import {useDispatch, useSelector} from "react-redux";
import SessionCardLarge from "../../../4_Components/6_SessionCardLarge";
import React, {useEffect} from "react";
import {fetchClientDetails} from "../../../2_Store/Fetches/client_details";
import {fetchClientRecentSessions} from "../../../2_Store/Fetches/user_specific_sessions";
import SessionCard from "../../../4_Components/5_SessionCard";
import {Bar, CartesianGrid, BarChart, XAxis, YAxis, Legend, Tooltip} from "recharts";


const AthleteOverview = props => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.clientDetails)
    const recentSessions = useSelector(state => state.clientRecentSessions)

    useEffect(() => {
        const client_id = props.match.params.index
        dispatch(fetchClientDetails(client_id))
        dispatch(fetchClientRecentSessions(client_id))
    }, [dispatch])

    const data = [
        {
            name: 'July',
            pat: 300,
            heart_rate: 175,
            amt: 2400,
        },
        {
            name: 'August',
            pat: 250,
            heart_rate: 180,
            amt: 2210,
        },
        {
            name: 'September',
            pat: 250,
            heart_rate: 175,
            amt: 2290,
        },
        {
            name: 'October',
            pat: 250,
            heart_rate: 160,
            amt: 2000,
        },
        {
            name: 'November',
            pat: 175,
            heart_rate: 150,
            amt: 2181,
        }
    ];

    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={`ATHLETE - ${profile['full_name']}`}/>
                { Object.keys(profile).length ?
                    <>
                        <SessionCardLarge profile={profile}/>
                        <BarChart
                            width={1000}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                            <Tooltip />
                            <Legend />
                            <Bar yAxisId="left" dataKey="heart_rate" fill="#8884d8" />
                            <Bar yAxisId="right" dataKey="pat" fill="#82ca9d" />
                        </BarChart>
                        {recentSessions.map(session => <SessionCard session={session}/>)}
                    </>
                    : 'Loading...' }
            </Body>
        </Main>
    )
}

export default AthleteOverview


