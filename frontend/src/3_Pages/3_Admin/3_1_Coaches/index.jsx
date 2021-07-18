import {Body, Main, SectionWrapper} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { Container } from "../../../4_Components/8_SearchBar";
import CoachCard from "../../../4_Components/28_CoachCard";
import {fetchAllCoaches} from "../../../2_Store/Fetches/get_all_coaches";
import {ReactComponent as SearchIcon} from "../../../5_Assets/SVG/40_search.svg";
import NewClient from "../../../4_Components/12_NewClient";
import Title from "../../../4_Components/14_Title";


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

                <NewClient url={'coach/new/'} type={'NEW_COACH'} text={'New Coach'}/>

                <SectionWrapper>
                    <Title text={'Coaches'}/>
                    {users ? users.map(user => <CoachCard user={user} type={'coaches'} />) :'Loading...'}
                </SectionWrapper>

            </Body>
        </Main>
    )
}

export default Coaches