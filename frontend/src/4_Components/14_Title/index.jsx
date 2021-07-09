import styled from "styled-components";

const Text = styled.h1`
  font-size: 1.2vw;
  margin-bottom: 1%;
  color: ${props => props.theme.ELBlue};
`

// Example: <Title text={'<Title text>'}/>

const Title = (props) => {
    return (
            <Text>{props.text}</Text>
    )
}

export default Title

