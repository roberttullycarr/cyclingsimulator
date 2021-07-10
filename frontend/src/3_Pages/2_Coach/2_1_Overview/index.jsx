import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import SessionCard from "../../../4_Components/5_SessionCard";
import SessionCardLarge from "../../../4_Components/6_SessionCardLarge";



const Overview = () => {
    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'Overview'}/>
                <SessionCard/>
                <SessionCardLarge/>
            </Body>
        </Main>
    )
}

export default Overview

