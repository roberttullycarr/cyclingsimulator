import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import {Container} from "../../../4_Components/8_SearchBar";
import SessionCard from "../../../4_Components/5_SessionCard";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllSessions} from "../../../2_Store/Fetches/all_sessions";
import {ReactComponent as SearchIcon} from "../../../5_Assets/SVG/40_search.svg";
import NewSession from "../../../4_Components/27_NewSession";
import {off} from "leaflet/src/dom/DomEvent";


const Sessions = () => {
    const [keyWord, setKeyWord] = useState('')
    const dispatch = useDispatch()
    const sessions = useSelector(state => state.allSessions)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        dispatch(fetchAllSessions(keyWord, offset))

    }, [keyWord, offset])

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
                {sessions ? sessions.map(session => <SessionCard session={session}/>) : 'Loading...'}
                <p onClick={() => setOffset(offset+10)}>Load more sessions</p>
            </Body>
        </Main>
    )
}

export default Sessions

