import styled from "styled-components";

const Text = styled.h1`
  font-size: 1.2vw;
  margin-bottom: 1%;
  margin-left: 1%;
  margin-top: 2vw;
  color: ${props => props.theme.ELBlue};
`

// Example: <Title text={'<Title text>'}/>

const Title = (props) => {
    return (
            <Text>{props.text}</Text>
    )
}

export default Title