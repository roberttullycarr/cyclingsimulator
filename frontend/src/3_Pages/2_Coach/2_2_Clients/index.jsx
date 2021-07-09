import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import Masonry from "react-masonry-css";
import "./styles.css";
import ClientCard from "../../../4_Components/11_ClientCard";


const Clients = () => {
    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'CLIENTS'}/>
                <Masonry
                  breakpointCols={3}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                    <ClientCard/>
                    <ClientCard/>
                    <ClientCard/>
                    <ClientCard/>
                    <ClientCard/>
                    <ClientCard/>
            </Masonry>
            </Body>
        </Main>
    )
}

export default Clients

