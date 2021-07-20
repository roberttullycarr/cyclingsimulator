import styled from "styled-components";
import arrow from "../../../5_Assets/SVG/42_arrowBold.svg"


const Select = styled.select`
  width: ${props => `${props.width}%`};
  height: ${props => `${props.height}%`};
  margin-top: ${props => `${props.marginTop}%` || "0%"};
  margin-bottom: ${props => `${props.marginBottom}%` || "0%"};
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  background-color: ${props => props.theme.InputFieldColor};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.BorderColor};
  cursor: pointer;
  padding-left: 5%;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center right calc(0.375em + 0.1875rem);
  background-size: 1rem 1rem;
  font-size: 1vw;
  font-weight: ${props => props.theme.textWeightBold};
`

const Option = styled.option`
  color: ${props => props.theme.SlightlyBlack};
  background-color: ${props => props.theme.InputFieldColor};
  font-weight: ${props => props.theme.textWeightBold};
`

const OptionField = props => {
    return (
        <Select value={props.default} {...props.register(props.name)} width={props.width} height={props.height} marginTop={props.marginTop} marginBottom={props.marginBottom}>
            {props.options.map(option => <Option value={option[1]}>{option[0]}</Option>)}
        </Select>
    )
}

export default OptionField