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
  font-weight: ${props => props.theme.textWeightBold};
  font-size: 1vw;
  color: ${props => props.theme.SlightlyBlack};
  padding-left: 5%;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center right calc(0.375em + 0.1875rem);
  background-size: 1rem 1rem;
`


// Example: <OptionField options={['test', 'test']} width={80} height={20}/>

const OptionField = (props) => {
    return (
        <Select width={props.width} height={props.height}>
            {props.options ? (
                props.options.map((option, index) =>(
                    <option value={String(index)}>{option}</option>))
            ):null}
        </Select>
    )
}

export default OptionField