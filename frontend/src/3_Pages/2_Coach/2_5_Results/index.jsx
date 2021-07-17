import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import RoutCardLarge from "../../../4_Components/10_RouteCardLarge";
import RouteOptions from "../../../4_Components/13_RouteOptions";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSpecificSession} from "../../../2_Store/Fetches/get_specific_session";
import SessionCardLarge from "../../../4_Components/6_SessionCardLarge";
import {useHistory} from "react-router";

const Results = props => {
    const dispatch = useDispatch()
    const session = useSelector(state => state.specificSession)
    const results = useSelector(state => state.sessionResults)
    const { id, client, created } = session
    const history = useHistory();
    const token = useSelector(state => state.token);

    useEffect(() => {
        const session_id = props.match.params.index
        dispatch({type: 'CLEAR_RESULTS'})
        dispatch(fetchSpecificSession(session_id))
        if(!token)history.push("/signin")

    }, [dispatch, props.match.params.index, history, token])

    return (
        <Main>
            <MenuBar/>
            <Body>
                {Object.keys(session).length ?
                    <>
                        <HeaderBar title={`RESULTS - ${client['full_name']} / ${created}`}/>
                        <SessionCardLarge profile={client} session={session}/>
                        <RouteOptions id={id}/>
                    </>
                    : 'Loading...'}
                {Object.keys(results).length ? results.routes.map(route => <RoutCardLarge route={route}/>) : null}
            </Body>
        </Main>
    )
}

export default Results