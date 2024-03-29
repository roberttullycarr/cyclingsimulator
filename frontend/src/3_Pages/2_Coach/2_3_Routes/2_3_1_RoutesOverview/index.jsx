import {Body, Main} from "../../../../4_Components/1_Main";
import MenuBar from "../../../../4_Components/3_MenuBar";
import HeaderBar from "../../../../4_Components/2_HeaderBar";
import './styles.css';
import Masonry from "react-masonry-css";
import RouteCardSmall from "../../../../4_Components/9_RouteCardSmall";
import {Container} from "../../../../4_Components/8_SearchBar";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as SearchIcon} from "../../../../5_Assets/SVG/40_search.svg";
import {fetchAllRoutes} from "../../../../2_Store/Fetches/routes_list";
import NewRoute from "../../../../4_Components/24_NewRoute";
import {useHistory} from "react-router";


const Routes = () => {
    const [keyWord, setKeyWord] = useState('')
    const dispatch = useDispatch()
    const routes = useSelector(state => state.routes)
    const history = useHistory();
    const token = useSelector(state => state.token);

    useEffect(() => {
        dispatch(fetchAllRoutes(keyWord))
        if(!token)history.push("/signin")

    }, [dispatch, keyWord, token, history])

    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'Routes'}/>

                <Container>
                    <div className="helper">
                        <SearchIcon/>
                    </div>
                    <input placeholder="Search routes by name or location"
                           onChange={(e) => setKeyWord(e.target.value)}/>
                </Container>
                <NewRoute />
                <Masonry
                    breakpointCols={2}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">

                    {routes ? routes.map(route => <RouteCardSmall route={route}/>) : 'Loading...'}

                </Masonry>
            </Body>
        </Main>
    )
}

export default Routes

