import styled from "styled-components";
import {useHistory, NavLink} from "react-router-dom";

const MBLinks = styled.button`
<<<<<<< HEAD
width: 5vw;
border: none;
background: none;
svg{
    width: 50%;
}
=======
  width: 100%;
  height: 25%;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  display: ${props => props.display || 'normal'};

  :hover {
    cursor: pointer;
  }
`

const Icon = styled.img`
  width: 50%;
>>>>>>> dev
`
const DivMenuLink = styled.div`
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    &:hover{
        //background: #0177B1;
        background: #8bc34a;
        p{
            color: ${props => props.theme.ELWhite}!important;
        } 
    }
    .main-nav-active{
        svg{
            fill: #8bc34a;
        }
        p{color: #8bc34a }
       
    }
`;
const NameNavBar = styled.p`
    color: white;
    font-weight: 700;
    font-size: 2vw;
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