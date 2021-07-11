import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import './styles.css';
import Masonry from "react-masonry-css";
import RouteCardSmall from "../../../4_Components/9_RouteCardSmall";
import SearchBar from "../../../4_Components/8_SearchBar";
import BaseButton from "../../../4_Components/4_ButtonsInputs/Button";


const Routes = () => {
    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'Routes'}/>
                <SearchBar placeholder={'Routes'}/>
                <BaseButton width={13} num={5} denom={1} fontSize={1.2} marginTop={1} marginBottom={2} text={'Create New Route'}/>
                <Masonry
                  breakpointCols={2}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                <RouteCardSmall/>
                <RouteCardSmall/>
                <RouteCardSmall/>
                <RouteCardSmall/>
                <RouteCardSmall/>
                <RouteCardSmall/>
            </Masonry>
            </Body>
        </Main>
    )
}

export default Routes

