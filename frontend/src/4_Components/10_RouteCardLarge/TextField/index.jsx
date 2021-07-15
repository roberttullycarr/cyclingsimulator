import PieNivo from "../../../3_Pages/2_Coach/2_5_Results/chart";
import {Title, Wrapper} from "./styled";

const TextField = props => {
    return (
        <Wrapper>
            <Title>Nutrition preparation for the climb</Title>
            <PieNivo route={props.route}/>
        </Wrapper>
    )}

export default TextField