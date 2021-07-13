
import { ReactComponent as AverageGradeIcon } from "../../5_Assets/SVG/28_averagegrade.svg";
import { ReactComponent as ElevationIcon }from "../../5_Assets/SVG/29_steepestgrade.svg";
import { ReactComponent as SteepestgradeIcon }from "../../5_Assets/SVG/29_steepestgrade.svg";
import { ReactComponent as DistanceIcon }from "../../5_Assets/SVG/26_distance.svg";
import {ContentCard, DivImg, HeroContent, ImgContainer, Line, Link, RouteHeader, RouteName, SVGWrapper, TextCard, WrapperDiv,
    WrapperLinks, WrapperTitleLinks} from "./styled";


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