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
import Pie from '../../../5_Assets/Wedges-3s-200px.gif'
import styled from "styled-components";

const LoadingWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 900;
  background: ${props => props.theme.AccentGray};
  border: ${props => props.theme.CardBorder};
  opacity: 50%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const LoadingImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 999;
`

const LoadingText = styled.span`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: ${props => props.theme.ELBlue};
  font-size: 2vw;
  z-index: 999;
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
                { Object.keys(session).length ?
                    <>
                        <HeaderBar title={'RESULTS'}/>
                        <SessionCardLarge profile={client} session={session}/>
                        <RouteOptions loading={setLoading} id={id}/>
                    </> : 'Loading...' }

                { Object.keys(results).length && loading ? setLoading(!loading) : null }
                { Object.keys(results).length ? results.routes.map(route =>
                    <RoutCardLarge profile={client} route={route}
                                   client={client['full_name']}/>) : null }
            </Body>
            {loading ?
                <>
                    <LoadingWrapper/>
                    <LoadingText>Generating results...</LoadingText>
                    <LoadingImg src={Pie} alt='loading gif'/>
                </>

                : null}
        </Main>
    )
}

export default Results