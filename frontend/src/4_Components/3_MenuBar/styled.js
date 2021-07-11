import styled from "styled-components";

export const MenuBarMain = styled.div`
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

export const LogoImg = styled.img`
width: 70%;
background: transparent;
`
export const BorderLine = styled.div`
width: 55%;
height: 1px;
margin-top: 20%;
border-bottom: 2px solid ${props => props.theme.BackgroundLightGrey}; 
`

export const LinksMainDiv = styled.div`
position: absolute;
height: 50%;
width: 100%;
top: 50%;
transform: translateY(-50%);
`