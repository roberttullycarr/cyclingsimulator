import styled from "styled-components";
import arrow from "../../../5_Assets/SVG/42_arrowBold.svg"


const Select = styled.select`
  width: ${props => `${props.width}%`};
  height: ${props => `${props.height}%`};
  appearance: none;
  outline: none;
  background-color: ${props => props.theme.InputFieldColor};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.BorderColor};
  cursor: pointer;
  // // font-weight: ${props => props.theme.textWeightBold};
  // font-size: 1vw;
  // color: ${props => props.theme.SlightlyBlack};
  padding-left: 5%;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center right calc(0.375em + 0.1875rem);
  background-size: 1rem 1rem;
`

const OptionField = props => {
    return (
        <Select value={props.default} {...props.register(props.name)} width={props.width} height={props.height}>
            {props.options.map(option => <option value={option[1]}>{option[0]}</option>)}
        </Select>
    )
}

export default OptionField