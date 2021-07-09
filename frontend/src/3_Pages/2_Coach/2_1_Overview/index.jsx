import {Main} from "../../../4_Components/1_Main";
import {useEffect, useState} from "react";
import {fetchCyclistData} from "../../../2_Store/Fetches/cyclist_data";
import {useDispatch} from "react-redux";
import Avatar from "../../../4_Components/7_Avatar";
import MenuBar from "../../../4_Components/3_MenuBar";
import SessionCard from "../../../4_Components/5_SessionCard";


const Overview = () => {
    const dispatch = useDispatch();
    const data = useState()

     // useEffect(() => {
     //     dispatch(fetchCyclistData(data))
     // }, [])

    return (
        <Main>
            <h1>Coach - Overview</h1>
            <MenuBar />
            <SessionCard />
        </Main>
    )
}

export default Overview

