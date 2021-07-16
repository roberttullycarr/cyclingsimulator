import styled from "styled-components";

export const MenuBarMain = styled.div.attrs(() => ({tabIndex: 0}))`
position: fixed;
left: 0;
width: 4.5%;
height: 100vh;
background: ${props => props.theme.ELBlue};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: 0.4s ease, width 0.4s ease, 0.4s;
z-index: 5;
p{
    opacity: 0;
    display:none;
}
.userProfil{
  display: flex;
  justify-content: center;
    transition: 0.2s ease;
    & > div:hover{
        border: 2px solid #8bc34a;
    }
}
a {
    text-decoration: none;
}
&:hover {
    width: 18%;
    button{
        display:none;
    }
    .logoHoverWidth {
        width: 7vw;
        margin: 13px 0;
    }
    .hidden{
        display:none;
    }
    .userProfil{
        width: 11vw;
        transition: 0.2s ease;
    }
    p{
        opacity: 1;
        display:inline;
       
    }
}
@media (min-width: 1440px) {
    .main-navbar-item{
        height: 20%;
    }
}
`

export const LogoImg = styled.img`
width: 70%;
background: transparent;
`
export const BorderLine = styled.hr`
width: 55%;
height: 1px;
background: ${props => props.theme.BackgroundLightGrey};
`

export const LinksMainDiv = styled.div`
position: relative;
height: 100%;
width: 100%;
`
// Navbar animation

export const Wrapper = styled.div`
    width: 3.5vw;
    margin: 5vh 0;
    position: relative;
`;

export const WrapperLogo = styled.div`
    width: 5vw;
    margin: 1.3vw 0 0.7vw;
    height: 5.395vw;
    text-align: center;
`;
export const LogOutBtn = styled.div`

`;
export const LogoutContainer = styled.div`
    margin: 4vh 0;
    cursor: pointer;
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        //background: #0177B1;
        background: #8bc34a;
    }
    svg{
        fill: ${props => props.theme.BackgroundLightGrey};
        width: 2vw;
        transform: rotate(180deg);
        height:auto;
    }
`;
export const LogoutText = styled.p`
    color: white;
    font-weight: 700;
    font-size: 1.4vw;
`;
