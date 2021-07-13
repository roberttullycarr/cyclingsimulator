import styled from "styled-components";
import ImgDetailRoute from "../../5_Assets/JPG/Ventoux.jpeg";

export const RouteHeader = styled.div`
    width: 100%;
    height: 100%;
`;
export const ImgContainer = styled.div`
    height: 45vh;
    background-image: url(${ImgDetailRoute}); 
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 2;
    &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
       
        background: linear-gradient(to bottom, rgba(6,27,65,0) 20%,rgba(6,27,65,0.95) 100%);
    }
`;

//header content
export const HeroContent = styled.div`
    z-index: 5;
    cursor: pointer;
    position: absolute;
    width: 90%;
    bottom: 0%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
`;
export const ContentCard = styled.div`
  width: 100%; 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
  padding: 1.2vh 0 2.5vh;
`;
export const WrapperDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
export const Line = styled.hr`
    width: 15%;
`;
export const WrapperTitleLinks = styled.div`
    padding-bottom: 8vh;
`;
export const WrapperLinks = styled.div`
    padding-top: 2vh;
    color: ${props => props.theme.ELWhite};
`;
export const Link = styled.a`
    margin-right: 3vw;
    &:hover{
        color: #4DB7FE;
    }
`;
export const RouteName = styled.h1`
    font-family: roboto,sans-serif;
    font-size: 2vw;
    color: ${props => props.theme.ELWhite};
    padding-bottom: 2vh;
`;
export const TextCard = styled.p`
  margin-left: 14px;
  font-size: 1.2vw;
  color: ${props => props.theme.ELWhite};
  font-family: roboto,sans-serif;
`;
export const DivImg = styled.div`
    display:flex;
    align-items: center;
`;
export const SVGWrapper = styled.div`
    width: 2vw;
    svg{
        fill: #4DB7FE;
    }
`;