import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { Container } from "../../../4_Components/8_SearchBar";
import BaseButton from "../../../4_Components/4_ButtonsInputs/Button";
import styled from "styled-components";
import CoachCard from "../../../4_Components/28_CoachCard";
import {fetchAllCoaches} from "../../../2_Store/Fetches/get_all_coaches";
import {ReactComponent as SearchIcon} from "../../../5_Assets/SVG/40_search.svg";

const ButtonWrapper = styled.div`
  height: 3vw;
  width: 85%;
  display: flex;
  justify-content: center;
`

const Coaches = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.allCoaches)
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        dispatch(fetchAllCoaches(keyword))
    }, [dispatch, keyword])

    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'Admin'}/>
                <Container>
                    <div className="helper">
                        <SearchIcon/>
                    </div>
                    <input placeholder="Search coaches by first name, last name, email or location"
                           onChange={(e) => setKeyword(e.target.value)}/>
                </Container>
                <ButtonWrapper>
                    <BaseButton height={100} width={10} text={'New Coach'}/>
                </ButtonWrapper>
                {users ? users.map(user => {if (user['is_coach']) {return(<CoachCard user={user}/>)}}):null}
            </Body>
        </Main>
    )
}

export default Coaches