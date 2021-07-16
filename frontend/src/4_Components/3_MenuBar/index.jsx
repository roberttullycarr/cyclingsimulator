import {useHistory} from "react-router-dom";
import EL_logo from '../../5_Assets/PNG/energylab_notext.png'
import Avatar from "../7_Avatar";
import MBLink from "./MBLinks";
import { ReactComponent as LogoutIcon } from "../../5_Assets/SVG/43_navbarBtn.svg";
import { ReactComponent as Coach } from '../../5_Assets/SVG/cap-hat.svg';
import { ReactComponent as Clients} from '../../5_Assets/SVG/12_clients.svg';
import { ReactComponent as Routes } from '../../5_Assets/SVG/13_routes.svg';
import { ReactComponent as Sessions } from '../../5_Assets/SVG/14_sessions.svg';

import {BorderLine, LinksMainDiv, LogoImg, MenuBarMain, LogOutBtn, Wrapper,
    WrapperLogo, LogoutContainer, LogoutText} from "./styled";


import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchLoggedInUserData} from "../../2_Store/Fetches/logged_in_user_info";


const MenuBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const myInfo = useSelector(state => state.myInfo)

    useEffect(() => {
        dispatch(fetchLoggedInUserData())
    }, [dispatch])

    return (
        <MenuBarMain>
            <WrapperLogo className="logoHoverWidth">
                <LogoImg src={EL_logo}/>
            </WrapperLogo>
            <BorderLine />
            <Wrapper className="userProfil">
                <Avatar width={70}  user={myInfo.avatar}/>
            </Wrapper>
                
            <LinksMainDiv>
                {myInfo.is_superuser ? <MBLink icon={<Coach />} navbarname={"Coaches"} url={'/admin'} /> : null}
                <MBLink icon={<Clients />} navbarname={"Clients"} url={'/coach/clients'} />
                <MBLink icon={<Routes />} navbarname={"Routes"} url={'/coach/routes'} /> 
                <MBLink icon={<Sessions />} navbarname={"Sessions"} url={'/coach/sessions'} />
            </LinksMainDiv>

            <LogoutContainer onClick={() => {localStorage.removeItem('token'); history.push('/signin')}}>
                <LogOutBtn className="hidden">
                    <LogoutIcon />
                </LogOutBtn>
                <LogoutText>Logout</LogoutText>
            </LogoutContainer>
            
        </MenuBarMain>
    )
}

export default MenuBar