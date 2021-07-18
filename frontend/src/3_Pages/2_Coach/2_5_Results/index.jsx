import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import RoutCardLarge from "../../../4_Components/10_RouteCardLarge";
import RouteOptions from "../../../4_Components/13_RouteOptions";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSpecificSession} from "../../../2_Store/Fetches/get_specific_session";
import SessionCardLarge from "../../../4_Components/6_SessionCardLarge";
import {useHistory} from "react-router";
import Loading from '../../../5_Assets/loading.gif'
import styled from "styled-components";

const LoadingImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

`

const Results = props => {
    const dispatch = useDispatch()
    const session = useSelector(state => state.specificSession)
    const results = useSelector(state => state.sessionResults)
    const { id, client } = session
    const history = useHistory();
    const token = useSelector(state => state.token);
    const [loading, setLoading] = useState(false)

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
                        <HeaderBar title={'RESULTS'}/>
                        <SessionCardLarge profile={client} session={session}/>
                        {loading ? <LoadingImg src={Loading} alt='loading gif'/> : null}
                        <RouteOptions loading={setLoading} id={id}/>
                    </>
                    : 'Loading...'}

                { Object.keys(results).length && loading ? setLoading(!loading) : null }
                { Object.keys(results).length ? results.routes.map(route =>
                        <RoutCardLarge profile={client} route={route}
                                       client={client['full_name']}/>)
                    : null }
            </Body>
        </Main>
    )
}

export default Results