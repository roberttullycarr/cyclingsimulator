import {useHistory} from "react-router-dom";
import EL_logo from '../../5_Assets/PNG/energylab_notext.png'
import Avatar from "../7_Avatar";
import MBLink from "./MBLinks";
import { ReactComponent as LogoutIcon } from "../../5_Assets/SVG/43_navbarBtn.svg";
import { ReactComponent as Logout } from "../../5_Assets/SVG/power-off-line.svg";
import { ReactComponent as Reset } from "../../5_Assets/SVG/password-reset.svg";
import { ReactComponent as Clients} from '../../5_Assets/SVG/12_clients.svg';
import { ReactComponent as Routes } from '../../5_Assets/SVG/13_routes.svg';
import { ReactComponent as Sessions } from '../../5_Assets/SVG/14_sessions.svg';
import { ReactComponent as Dashboard } from '../../5_Assets/SVG/11_overview.svg';
import { ReactComponent as Whistle } from '../../5_Assets/SVG/whistle.svg';
import {
    BorderLine, LinksMainDiv, LogoImg, MenuBarMain, LogOutBtn, Wrapper,
    WrapperLogo, LogoutContainer, LogoutText, PasswordResetContainer
} from "./styled";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchLoggedInUserData} from "../../2_Store/Fetches/logged_in_user_info";
import styled from "styled-components";

const MenuBarTop = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 24%;
`


const MenuBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const myInfo = useSelector(state => state['myInfo']);

    useEffect(() => {
        dispatch(fetchLoggedInUserData())
    }, [dispatch])

    return (
        <MenuBarMain>
            <MenuBarTop>
                <WrapperLogo className="logoHoverWidth">
                    <LogoImg src={EL_logo}/>
                </WrapperLogo>
                <BorderLine />
                <Wrapper className="userProfil">
                    <Avatar width={70}  user={myInfo['avatar']} color={'#FFFFFF'}/>
                </Wrapper>
            </MenuBarTop>

            <LinksMainDiv>
                <MBLink icon={<Dashboard />} navbarname={"Dashboard"} url={'/dashboard'} />
                {myInfo['is_superuser'] ? <MBLink icon={<Whistle />} navbarname={"Coaches"} url={'/admin'} /> : null}
                <MBLink icon={<Clients />} navbarname={"Clients"} url={'/clients'} />
                <MBLink icon={<Routes />} navbarname={"Routes"} url={'/routes'} />
                <MBLink icon={<Sessions />} navbarname={"Sessions"} url={'/sessions'} />
            </LinksMainDiv>

            <PasswordResetContainer onClick={() => history.push('/password/reset')}>
                <LogOutBtn className="hidden">
                    <Reset />
                </LogOutBtn>
                <LogoutText>Reset Password</LogoutText>
            </PasswordResetContainer>
            <LogoutContainer onClick={() => {localStorage.removeItem('token'); history.push('/signin')}}>
                <LogOutBtn className="hidden">
                    <Logout />
                </LogOutBtn>
                <LogoutText>Logout</LogoutText>
            </LogoutContainer>
        </MenuBarMain>
    )
}

export default MenuBar