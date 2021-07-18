import {Body, Main, SectionWrapper} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import {Container} from "../../../4_Components/8_SearchBar";
import SessionCard from "../../../4_Components/5_SessionCard";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllSessions} from "../../../2_Store/Fetches/all_sessions";
import {ReactComponent as SearchIcon} from "../../../5_Assets/SVG/40_search.svg";
import Title from "../../../4_Components/14_Title";


const Sessions = () => {
    const [keyWord, setKeyWord] = useState('')
    const dispatch = useDispatch()
    const sessions = useSelector(state => state.allSessions)

    useEffect(() => {
        dispatch(fetchAllSessions(keyWord))

    }, [dispatch, keyWord])

    return (
        <Main>
            <MenuBar/>
            <Body>
                <HeaderBar title={'Sessions'}/>
                <Container>
                    <div className="helper">
                        <SearchIcon/>
                    </div>
                    <input placeholder="Search sessions by client name"
                           onChange={(e) => setKeyWord(e.target.value)}/>
                </Container>
                <SectionWrapper>
                    <Title text={"All Sessions"}/>
                    {sessions ? sessions.map(session => <SessionCard session={session}/>) : 'Loading...'}
                </SectionWrapper>
            </Body>
        </Main>
    )
}

export default Sessions

