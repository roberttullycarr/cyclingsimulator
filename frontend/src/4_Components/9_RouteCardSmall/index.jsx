import RouteDataSmall from "./RouteData";
import {RouteCardMain, RouteImg, RouteImgMain} from "./styled";
import {useHistory} from "react-router-dom";



const RouteCardSmall = props => {
    const history = useHistory();

    // destructuring props
    const { name, id, location, avatar, distance, elevation, steepest_km, average_grade } = props.route
    return (
        <RouteCardMain onClick={() => history.push(`routes/${id}`)}>
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