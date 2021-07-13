import EL_logo from '../../5_Assets/PNG/energylab_notext.png'
import Avatar from "../7_Avatar";
import profile_photo from "../../5_Assets/PNG/carr_profile.jpg"
import MBLink from "./MBLinks";
import overview from '../../5_Assets/SVG/11_overview.svg'
import cyclist from '../../5_Assets/SVG/12_clients.svg'
import routes from '../../5_Assets/SVG/13_routes.svg'
import sessions from '../../5_Assets/SVG/14_sessions.svg'
import {BorderLine, LinksMainDiv, LogoImg, MenuBarMain} from "./styled";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchLoggedInUserData} from "../../2_Store/Fetches/logged_in_user_info";



const MenuBar = () => {
    const dispatch = useDispatch()
    const myInfo = useSelector(state => state.myInfo)

    useEffect(() => {
        dispatch(fetchLoggedInUserData())
    }, [])

    return (
        <MenuBarMain>
            <LogoImg src={EL_logo}/>
            <BorderLine />
            <Avatar width={65} marginTop={"20%"} user={myInfo.avatar}/>
            <LinksMainDiv>
                <MBLink icon={overview} url={'/'}/>
                <MBLink icon={cyclist} url={'/coach/clients'}/>
                <MBLink icon={routes} url={'/coach/routes'}/>
                <MBLink icon={sessions} url={'/coach/sessions'}/>
            </LinksMainDiv>
        </MenuBarMain>
    )
}

export default MenuBar