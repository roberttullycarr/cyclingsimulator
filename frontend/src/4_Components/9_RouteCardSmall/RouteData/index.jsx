import {
    DataBottomLeft, DataBottomRight,
    DataLeft,
    DataLineOne,
    DataLineTwo,
    DataNum,
    DataRight,
    DataVariable,
    RouteDataMain,
    RouteTitle
} from "./styled";


const RouteDataSmall = props => {
    return (
        <RouteDataMain>
            <RouteTitle>{props.title}</RouteTitle>
            <p className="location">{props.location}</p>
            <DataLineOne>
                <DataLeft>
                    <DataNum>{`${props.distance} KM`}</DataNum>
                    <DataVariable>Distance</DataVariable>
                </DataLeft>
                <DataRight>
                    <DataNum>{`${props.avg_grade} %`}</DataNum>
                    <DataVariable>Average Grade</DataVariable>
                </DataRight>
            </DataLineOne>
            <DataLineTwo>
                <DataBottomLeft>
                    <DataNum>{`${props.elevation} M`}</DataNum>
                    <DataVariable>Elevation</DataVariable>
                </DataBottomLeft>
                <DataBottomRight>
                    <DataNum>{`${props.steep_grade} %`}</DataNum>
                    <DataVariable>Steepest Grade</DataVariable>
                </DataBottomRight>
            </DataLineTwo>
        </RouteDataMain>
    )
}

export default RouteDataSmall