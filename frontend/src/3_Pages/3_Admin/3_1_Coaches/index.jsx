import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import SearchBar from "../../../4_Components/8_SearchBar";
import BaseButton from "../../../4_Components/4_ButtonsInputs/Button";
import styled from "styled-components";
import CoachCard from "../../../4_Components/28_CoachCard";
import {fetchClientDetails} from "../../../2_Store/Fetches/client_details";
import {fetchClientRecentSessions} from "../../../2_Store/Fetches/user_specific_sessions";

const ButtonWrapper = styled.div`
  height: 3vw;
  width: 85%;
  display: flex;
  justify-content: center;
`

const Coaches = props => {

    // const dispatch = useDispatch()
    // const profile = useSelector(state => state.clientDetails)
    //
    // useEffect(() => {
    //     const client_id = props.match.params.index
    //     dispatch(fetchClientDetails(client_id))
    //     dispatch(fetchClientRecentSessions(client_id))
    // }, [dispatch, props.match.params.index])

    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'Admin'}/>
                <SearchBar/>
                <ButtonWrapper>
                    <BaseButton height={100} width={10} text={'New Coach'}/>
                </ButtonWrapper>
                {/*<CoachCard user={profile}/>*/}
            </Body>
        </Main>
    )
}

export default Coaches