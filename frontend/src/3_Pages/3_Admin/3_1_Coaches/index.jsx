import {Body, Main, SectionWrapper} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import SearchBar from "../../../4_Components/8_SearchBar";
import styled from "styled-components";
import CoachCard from "../../../4_Components/28_CoachCard";
import {fetchAllCoaches} from "../../../2_Store/Fetches/get_all_coaches";
import NewClient from "../../../4_Components/12_NewClient";
import Title from "../../../4_Components/14_Title";

const ButtonWrapper = styled.div`
  height: 3vw;
  width: 85%;
  display: flex;
  justify-content: center;
`

const Coaches = props => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.allCoaches)
    const loggedInUser = useSelector(state => state.myInfo)

    useEffect(() => {
        dispatch(fetchAllCoaches())
    }, [dispatch])


    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'Admin'}/>
                <SearchBar/>
                <NewClient url={'coach/new/'} type={'NEW_COACH'} text={'New Coach'}/>
                <SectionWrapper>
                    <Title text={'Coaches'}/>
                    {users ? users.map(user => {if (user.id !== loggedInUser.id) {return(<CoachCard
                        user={user} type={'coaches'} />)}}):null}
                </SectionWrapper>
            </Body>
        </Main>
    )
}

export default Coaches