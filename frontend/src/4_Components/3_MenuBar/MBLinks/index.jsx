import styled from "styled-components";
import {useHistory, NavLink} from "react-router-dom";

const MBLinks = styled.button`
width: 5vw;
border: none;
background: none;
svg{
    width: 50%;
    fill: ${props => props.theme.MBLinkColor};
}
`
const DivMenuLink = styled.div`
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    &:hover{
        //background: #0177B1;
        background: ${props => props.theme.MBLinkActiveColor};
        p{
            color: ${props => props.theme.ELWhite}!important;
        } 
    }
    .main-nav-active{
        svg{
            fill: ${props => props.theme.MBLinkActiveColor};
        }
        p{color: ${props => props.theme.MBLinkActiveColor}}
       
    }
`;
const NameNavBar = styled.p`
    color: ${props => props.theme.MBLinkColor};
    font-weight: 700;
    font-size: 1.4vw;
`;

const MBLink = (props) => {
    const history = useHistory();
    return (
            <DivMenuLink onClick={() => history.push(props.url)} >
                <NavLink to={props.url} activeClassName="main-nav-active">
                    <MBLinks>
                        {props.icon}
                    </MBLinks>
                    <NameNavBar>{props.navbarname}</NameNavBar>
                </NavLink>
            </DivMenuLink>
    )
}

export default MBLink
