import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import UserInfoCard from "../../../4_Components/26_UserInfoCard";


const Results = () => {
    return (
        <Main>
            <MenuBar/>
            <Body>
                <HeaderBar title={'RESULTS - THIJS DEKIERE'}/>
                <UserInfoCard/>
            </Body>
        </Main>
    )
}

export default Results