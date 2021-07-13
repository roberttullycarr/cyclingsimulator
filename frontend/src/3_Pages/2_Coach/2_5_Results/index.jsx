import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import RoutCardLarge from "../../../4_Components/10_RouteCardLarge";
import RouteOptions from "../../../4_Components/13_RouteOptions";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSpecificSession} from "../../../2_Store/Fetches/get_specific_session";

const Results = props => {
    const dispatch = useDispatch()
    const session = useSelector(state => state.specificSession)
    const { id, client, created } = session

    useEffect(() => {
        const session_id = props.match.params.index
        dispatch(fetchSpecificSession(session_id))
    }, [dispatch])

    return (
        <Main>
            <MenuBar/>
            <Body>
                {Object.keys(session).length ?
                    <>
                        <HeaderBar title={`RESULTS - ${client['full_name']} / ${created}`}/>
                        <RouteOptions id={id}/>
                        <RoutCardLarge />
                    </>
                    : 'Loading...'}
            </Body>
        </Main>
    )
}

export default Results