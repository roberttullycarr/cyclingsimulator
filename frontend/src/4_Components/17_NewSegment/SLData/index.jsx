import styled from "styled-components"
import BaseInput from "../../4_ButtonsInputs/Input";
import {elevation} from "../../../3_Pages/2_Coach/2_5_Results/simulation_variables";
import OptionField from "../../13_RouteOptions/OptionField";

const SLDataMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.edit ? "23.75%" : "25%"};
`

const SLData = (props) => {
    const elevationName = elevation.filter((arr) => arr[1] === parseFloat(props.data));

    return (
        <SLDataMain edit={props.edit}>
            {props.edit ? null : <p>
                        {props.name === 'elevation' ? elevationName[0][0] : props.data}
                    </p>}
                    {props.edit ? props.name === 'elevation' ?
                        <OptionField options={elevation} register={props.var} title={'Elevation (M)'}
                                     width={90} name={'elevation'} height={80} /> :
                        <BaseInput var={props.var} message={'This field is required'}
                                             value={props.data} type={"text"} name={props.name}
                                   title={props.title ? props.title : null} width={90} height={80}
                                             marginBottom={props.title ? 10 : 2} /> : null }
        </SLDataMain>
    )
}

export default SLData