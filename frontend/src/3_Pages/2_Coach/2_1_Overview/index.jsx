import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";



const Overview = () => {
    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'OVERVIEW'}/>

            </Body>
        </Main>
    )
}

export default Overview

