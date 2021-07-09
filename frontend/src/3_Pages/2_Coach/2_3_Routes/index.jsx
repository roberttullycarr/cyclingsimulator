import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import './styles.css';
import Masonry from "react-masonry-css";
import RouteCardSmall from "../../../4_Components/9_RouteCardSmall";


const Routes = () => {
    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'ROUTES'}/>
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

