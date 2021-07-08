import {Main} from "../../../4_Components/1_Main";
import {useEffect, useState} from "react";
import {fetchCyclistData} from "../../../2_Store/Fetches/cyclist_data";
import {useDispatch} from "react-redux";


const Overview = () => {
    const dispatch = useDispatch();
    const data = useState()

     // useEffect(() => {
     //     dispatch(fetchCyclistData(data))
     // }, [])

    return (
        <Main>
            <h1>Coach - Overview</h1>
        </Main>
    )
}

export default Overview

