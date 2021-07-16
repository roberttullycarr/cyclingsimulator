import MenuBar from "../../../../4_Components/3_MenuBar";
import {Body, Main} from "../../../../4_Components/1_Main";
import HeaderBar from "../../../../4_Components/2_HeaderBar";
import RouteDetailHeader from "../../../../4_Components/20_RouteDetailHeader";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSpecificRoute} from "../../../../2_Store/Fetches/route_details";
import RouteSegments from "../../../../4_Components/17_NewSegment";
import {useHistory} from "react-router";

const RoutesDetail = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const token = useSelector(state => state.token);

    useEffect(() => {
        const session_id = props.match.params.index
        dispatch(fetchSpecificRoute(session_id))
        if(!token)history.push("/signin")
    }, [dispatch, token, history]);


    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'Routes'}/>
                <RouteDetailHeader/>
                <RouteSegments />
            </Body>
        </Main>
    )
}

export default RoutesDetail
