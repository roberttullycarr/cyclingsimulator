import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import SearchBar from "../../../4_Components/8_SearchBar";
import SessionCard from "../../../4_Components/5_SessionCard";


const Sessions = () => {
    return (
        <Main>
            <MenuBar/>
            <Body>
                <HeaderBar title={'SESSIONS'}/>
                <SessionCard/>
                <SessionCard/>
                <SessionCard/>
                <SessionCard/>
                <SessionCard/>
                <SessionCard/>
                <SessionCard/>
                <SessionCard/>
            </Body>
        </Main>
    )
}

export default Sessions

