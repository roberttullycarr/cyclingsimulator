import styled from "styled-components";
import ImgDetailRoute from "../../5_Assets/JPG/Ventoux.jpeg";
import { ReactComponent as AverageGradeIcon } from "../../5_Assets/SVG/28_averagegrade.svg";
import { ReactComponent as ElevationIcon }from "../../5_Assets/SVG/29_steepestgrade.svg";
import { ReactComponent as SteepestgradeIcon }from "../../5_Assets/SVG/29_steepestgrade.svg";
import { ReactComponent as DistanceIcon }from "../../5_Assets/SVG/26_distance.svg";


const RouteHeader = styled.div`
    width: 100%;
    height: 100%;
`; 
const ImgContainer = styled.div`
    height: 45vh;
    //background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)), url(${props => `${props.image}` || ImgDetailRoute}); 
    //background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)), url(${ImgDetailRoute}); 
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
const HeroContent = styled.div`
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
const ContentCard = styled.div`
  width: 100%; 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
  padding: 1.2vh 0 2.5vh;
`;
const WrapperDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
const Line = styled.hr`
    width: 15%;
`;
const WrapperTitleLinks = styled.div`
    padding-bottom: 8vh;
`;
const WrapperLinks = styled.div`
    padding-top: 2vh;
    color: ${props => props.theme.ELWhite};
`;
const Link = styled.a`
    margin-right: 3vw;
    &:hover{
        color: #4DB7FE;
    }
`;
const RouteName = styled.h1`
    font-family: roboto,sans-serif;
    font-size: 2vw;
    color: ${props => props.theme.ELWhite};
    padding-bottom: 2vh;
`;
const TextCard = styled.p`
  margin-left: 14px;
  font-size: 1.2vw;
  color: ${props => props.theme.ELWhite};
  font-family: roboto,sans-serif;
`;
const DivImg = styled.div`
    display:flex;
    align-items: center;
`;
const SVGWrapper = styled.div`
    width: 2vw;
    svg{
        fill: #4DB7FE;
    }
`;

const RouteDetailHeader = (props) => {
    
    return (
        <RouteHeader>
            <ImgContainer backgroundImage={props.image}>
                <HeroContent>
                    <WrapperTitleLinks>
                        <RouteName>Mont Ventoux - Bedouin</RouteName>
                        <Line/>
                        <WrapperLinks>
                            <Link>Lorem ipsum dolor sit amet</Link> 
                            <Link>consectetuer </Link>
                            <Link>elementum</Link>
                        </WrapperLinks>
                        
                    </WrapperTitleLinks>
                    <ContentCard>
                        <WrapperDiv>
                            <DivImg>
                                <SVGWrapper>
                                    <DistanceIcon/>
                                </SVGWrapper>
                                <TextCard>{ "distance:" + props.distance ? props.distance : "0" }</TextCard>
                            </DivImg>
                       
                            <DivImg>
                                <SVGWrapper>
                                    <AverageGradeIcon/>
                                </SVGWrapper>
                                <TextCard>{ "Average Grade:" + props.averageGrade ? props.averageGrade : "0" }</TextCard>
                            </DivImg>
                       
                            <DivImg>
                                <SVGWrapper>
                                    <SteepestgradeIcon/> 
                                </SVGWrapper>
                                <TextCard>{ "Steepest Grade:" + props.steepestGrade ? props.steepestGrade : "0" }</TextCard>
                            </DivImg>
                     
                            <DivImg>
                                <SVGWrapper>
                                    <ElevationIcon/>
                                </SVGWrapper>
                                <TextCard>{"Elevation" + props.elevation ? props.elevation : "0"}</TextCard>
                            </DivImg>
                            
                        </WrapperDiv>

                    </ContentCard>

                </HeroContent>
                
            </ImgContainer>

        </RouteHeader>
    )

}

export default RouteDetailHeader;