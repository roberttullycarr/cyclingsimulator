import MenuBar from "../../../../4_Components/3_MenuBar";
import {Body, Main} from "../../../../4_Components/1_Main";
import HeaderBar from "../../../../4_Components/2_HeaderBar";
import RouteDetailHeader from "../../../../4_Components/20_RouteDetailHeader";

const RoutesDetail = () => {
    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'Routes'}/>
                <RouteDetailHeader/>
            </Body>
        </Main>
    )
}

export default RoutesDetail
