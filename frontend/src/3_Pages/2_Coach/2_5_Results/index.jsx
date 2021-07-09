import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";

// import SessionCardLarge from "../../../4_Components/6_SessionCardLarge";
// import SearchBar from "../../../4_Components/8_SearchBar";
// import RouteOptions from "../../../4_Components/13_RouteOptions";

const Results = () => {
    return (
        <Main>
            <MenuBar/>
            <Body>
                <HeaderBar title={'RESULTS - THIJS DEKIERE'}/>
                <h1>Coach - results page</h1>
                {/*<SessionCardLarge/>*/}
                {/*<SearchBar placeholder={'Routes'}/>*/}
                {/*<RouteOptions/>*/}
            </Body>
        </Main>
    )
}

export default Results

