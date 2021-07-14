import styled from "styled-components";
import BaseInput from "../../4_ButtonsInputs/Input";
import {useForm} from "react-hook-form";

const Wrapper = styled.div`
  width: ${props => `${props.width}%` || "50%"};
  height: ${props => `${props.height}%` || "50%"};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const DataWrapper = styled.div`
  display: flex;
  height: 70%;
  align-items: flex-end;
`

const Label = styled.h2`
  width: 10%;
  font-size: 0.8vw;
  color: ${props => props.theme.AccentGray};
  align-self: flex-end;
  margin: 0 2% 2% 0;
  
`

const Line = styled.div`
  height: 2px;
  border: 1px solid ${props => props.theme.AccentGray};
  width: 90%;
  margin-bottom: 3%;
`

const Data = styled.p`
  font-size: 1.2vw;
  width: 78%;
  font-weight: ${props => props.theme.textWeightBold};
  color: ${props => props.theme.SlightlyBlack};
  visibility: ${props => `${props.visibility}` || "visible"};
  align-self: flex-end;
  margin-bottom: 2%;
  overflow: scroll;
  overflow-y: hidden;
  text-overflow: clip;
  
  ::-webkit-scrollbar {
  display: none;  /* Chrome */
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`

const DataField = (props) => {

    return (
        <Wrapper width={props.width} height={props.height}>
                <DataWrapper>
                    <Label>
                        {props.label}
                    </Label>
                    {props.edit ? null : (<Data color={props.color}>
                        {props.data}
                    </Data>)}
                    {props.edit ? <BaseInput var={props.var} message={'This field is required'} value={props.data} type={"text"} name={'email'} width={78} height={80} marginBottom={1}/> : null }
                </DataWrapper>
                <Line/>
        </Wrapper>
    )
}

export default DataField
