import {useHistory} from "react-router-dom";
import EL_logo from '../../5_Assets/PNG/energylab_notext.png'
import Avatar from "../7_Avatar";
import profile_photo from "../../5_Assets/PNG/carr_profile.jpg"
import MBLink from "./MBLinks";
import { ReactComponent as LogoutIcon } from "../../5_Assets/SVG/43_navbarBtn.svg";

import { ReactComponent as Overview } from '../../5_Assets/SVG/11_overview.svg';
import { ReactComponent as Clients} from '../../5_Assets/SVG/12_clients.svg';
import { ReactComponent as Routes } from '../../5_Assets/SVG/13_routes.svg';
import { ReactComponent as Sessions } from '../../5_Assets/SVG/14_sessions.svg';


import {BorderLine, LinksMainDiv, LogoImg, MenuBarMain, LogOutBtn, Wrapper, WrapperLogo, LogoutContainer, LogoutText} from "./styled";



const MenuBar = () => {
    const history = useHistory();
    return (
        <MenuBarMain>
            <WrapperLogo className="logoHoverWidth">
                <LogoImg src={EL_logo}/>
            </WrapperLogo>
    
            <BorderLine />
            <Wrapper className="userProfil">
                <Avatar user={profile_photo}/>
            </Wrapper>
                
            <LinksMainDiv>
                <MBLink icon={<Overview />} navbarname={"Overview"} url={'/coach/overview'} />
                <MBLink icon={<Clients />} navbarname={"Clients"} url={'/coach/clients'} />
                <MBLink icon={<Routes />} navbarname={"Routes"} url={'/coach/routes'} /> 
                <MBLink icon={<Sessions />} navbarname={"Sessions"} url={'/coach/sessions'} />
            </LinksMainDiv>

            <LogoutContainer onClick={() => history.push('/signin')}> 
                <LogOutBtn className="hidden">
                    <LogoutIcon />
                </LogOutBtn>
                <LogoutText>Logout</LogoutText>
            </LogoutContainer>
            
        </MenuBarMain>
    )
}

export default MenuBar