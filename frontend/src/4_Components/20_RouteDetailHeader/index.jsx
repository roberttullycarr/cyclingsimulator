import { ReactComponent as AverageGradeIcon } from "../../5_Assets/SVG/28_averagegrade.svg";
import { ReactComponent as ElevationIcon }from "../../5_Assets/SVG/29_steepestgrade.svg";
import { ReactComponent as SteepestgradeIcon }from "../../5_Assets/SVG/29_steepestgrade.svg";
import { ReactComponent as DistanceIcon }from "../../5_Assets/SVG/26_distance.svg";
import {ContentCard, DivImg, HeroContent, ImgContainer, Line, RouteHeader, RouteName, SVGWrapper, TextCard, WrapperDiv,
    WrapperTitleLinks} from "./styled";
import {useSelector} from "react-redux";


const RouteDetailHeader = (props) => {
    const route = useSelector(state => state.specificRoute);

    return (
        <RouteHeader>
            <ImgContainer backgroundImage={route.banner}>
                <HeroContent>
                    <WrapperTitleLinks>
                        <RouteName>{route.name}</RouteName>
                        <Line/>
                    </WrapperTitleLinks>
                    <ContentCard>
                        <WrapperDiv>
                            <DivImg>
                                <SVGWrapper>
                                    <DistanceIcon/>
                                </SVGWrapper>
                                <TextCard>{route.distance ? `Distance: ${route.distance} KM`: "Loading..." }</TextCard>
                            </DivImg>
                       
                            <DivImg>
                                <SVGWrapper>
                                    <AverageGradeIcon/>
                                </SVGWrapper>
                                <TextCard>{route.average_grade ? `Average Grade: ${route.average_grade}%` : "Loading..." }</TextCard>
                            </DivImg>
                       
                            <DivImg>
                                <SVGWrapper>
                                    <SteepestgradeIcon/> 
                                </SVGWrapper>
                                <TextCard>{route.steepest_km ? `Steepest Grade: ${route.steepest_km}%` : "Loading..." }</TextCard>
                            </DivImg>
                     
                            <DivImg>
                                <SVGWrapper>
                                    <ElevationIcon/>
                                </SVGWrapper>
                                <TextCard>{route.elevation ? `Elevation: ${route.elevation} M` : "Loading..." }</TextCard>
                            </DivImg>
                        </WrapperDiv>
                    </ContentCard>
                </HeroContent>
            </ImgContainer>
        </RouteHeader>
    )

}

export default RouteDetailHeader;