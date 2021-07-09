import stelvio from "../../5_Assets/JPG/stelvio_06_hairpin.jpeg"
import RouteDataSmall from "./RouteData";
import {RouteCardMain, RouteImg, RouteImgMain} from "./styled";



const RouteCardSmall = () => {
    return (
        <RouteCardMain>
            <RouteImgMain>
                <RouteImg src={stelvio}/>
            </RouteImgMain>
            <RouteDataSmall title={'Passo del Stelvio'} distance={21.5} avg_grade={7.4} elevation={1912} steep_grade={10.5}/>
        </RouteCardMain>
    )
}

export default RouteCardSmall