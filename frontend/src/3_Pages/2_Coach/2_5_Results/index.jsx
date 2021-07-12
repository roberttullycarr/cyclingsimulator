import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import RouteOptions from "../../../4_Components/13_RouteOptions";
import RoutCardLarge from "../../../4_Components/10_RouteCardLarge";
import SessionCardLarge from "../../../4_Components/6_SessionCardLarge";

const Results = () => {
    return (
        <Main>
            <MenuBar/>
            <Body>
                <HeaderBar title={'RESULTS - THIJS DEKIERE'}/>
                <SessionCardLarge/>
                <RouteOptions/>
                <RoutCardLarge/>
            </Body>
        </Main>
    )
}

export default Results