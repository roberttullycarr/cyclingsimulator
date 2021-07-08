import styled from "styled-components";
import EL_logo from '../../5_Assets/PNG/energylab_notext.png'
import Avatar from "../7_Avatar";


const MenuBarMain = styled.div`
position: fixed;
left: 0;
width: 4.5%;
height: 100vh;
background: ${props => props.theme.ELBlue};
display: flex;
flex-direction: column;
align-items: center;
padding: 1.5% 0%;
`

const LogoImg = styled.img`
width: 75%;
background: transparent;
`
const BorderLine = styled.div`
width: 65%;
height: 1px;
margin-top: 20%;
border-bottom: 1px solid ${props => props.theme.BackgroundLightGrey}; 
`

const MenuBar = () => {
    return (
        <MenuBarMain>
            <LogoImg src={EL_logo}/>
            <BorderLine />
            <Avatar width={75} marginTop={20} />
        </MenuBarMain>
    )
}

export default MenuBar