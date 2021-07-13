import RouteDataSmall from "./RouteData";
import {RouteCardMain, RouteImg, RouteImgMain} from "./styled";



const RouteCardSmall = props => {
    // destructuring props
    const { name, location, avatar, distance, elevation, steepest_km, average_grade } = props.route
    return (
        <RouteCardMain>
            <RouteImgMain>
                <RouteImg src={avatar}/>
            </RouteImgMain>
            <RouteDataSmall title={name}
                            distance={distance} avg_grade={average_grade} elevation={elevation}
                            steep_grade={steepest_km} location={location}/>
        </RouteCardMain>
    )
}

export default RouteCardSmall