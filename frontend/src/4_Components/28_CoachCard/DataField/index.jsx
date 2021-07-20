import BaseInput from "../../4_ButtonsInputs/Input";
import {Data, DataWrapper, Label, Line, Wrapper} from "./styled";

const DataField = (props) => {

    return (
        <Wrapper width={props.width} height={props.height}>
                <DataWrapper>
                    <Label>
                        {props.label}
                    </Label>
                    {props.edit ? null : <Data color={props.color}>
                        {props.data}
                    </Data>}
                    {props.edit ?
                        <BaseInput var={props.var} message={props.message}
                                             value={props.data} type={"text"} name={props.name} width={75} height={80}
                                             marginBottom={1}/> : null }
                </DataWrapper>
                <Line/>
        </Wrapper>
    )
}

export default DataField
