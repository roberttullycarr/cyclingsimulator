import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import SearchBar, {Container} from "../../../4_Components/8_SearchBar";
import SessionCard from "../../../4_Components/5_SessionCard";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllSessions} from "../../../2_Store/Fetches/all_sessions";
import {ReactComponent as SearchIcon} from "../../../5_Assets/SVG/40_search.svg";


const Sessions = () => {
    const [keyWord, setKeyWord] = useState('')
    const dispatch = useDispatch()
    const sessions = useSelector(state => state.allSessions)

    useEffect(() => {
        dispatch(fetchAllSessions(keyWord))
    }, [keyWord])

    return (
        <Main>
            <MenuBar/>
            <Body>
                <HeaderBar title={'SESSIONS'}/>
                <Container>
                    <div className="helper">
                        <SearchIcon/>
                    </div>
                    <input placeholder="Search sessions by client name"
                           onChange={(e) => setKeyWord(e.target.value)}/>
                </Container>

                {sessions ? sessions.map(session => <SessionCard session={session}/>) : 'Loading...'}

            </Body>
        </Main>
    )
}

export default Sessions

