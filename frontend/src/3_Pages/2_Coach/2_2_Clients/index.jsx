import {Body, Main} from "../../../4_Components/1_Main";
import MenuBar from "../../../4_Components/3_MenuBar";
import HeaderBar from "../../../4_Components/2_HeaderBar";
import Masonry from "react-masonry-css";
import "./styles.css";
import ClientCard from "../../../4_Components/11_ClientCard";
import {Container} from "../../../4_Components/8_SearchBar";
import { ReactComponent as SearchIcon } from '../../../5_Assets/SVG/40_search.svg'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchMyClients} from "../../../2_Store/Fetches/client_list";
import NewClientCard from "../../../4_Components/12_NewClientCard";


const Clients = () => {
    const dispatch = useDispatch()
    const myClients = useSelector(state => state.myClients)
    const [keyWord, setKeyWord] = useState('')

    useEffect(() => {
        dispatch(fetchMyClients(keyWord))
    }, [keyWord])

    return (
        <Main>
            <MenuBar />
            <Body>
                <HeaderBar title={'Clients'}/>

                <Container>
                    <div className="helper">
                        <SearchIcon/>
                    </div>
                    <input placeholder="Search clients by name, email or location"
                           onChange={(e) => setKeyWord(e.target.value)}/>
                </Container>

                <Masonry
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    <NewClientCard/>
                    { myClients ? myClients.map(client =>
                        <ClientCard client={client}/>
                        )
                        : 'Loading...'}

                </Masonry>
            </Body>
        </Main>
    )
}

export default Clients

