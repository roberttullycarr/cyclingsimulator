import styled from 'styled-components'

const Button = styled.button`
background: ${props => props.theme.ELGreen};
width: ${props => `${props.width}%` || "4%"};
height: ${props => props.height || "4%"};
margin-left: ${props => props.marginLeft || "4%"};
margin-right: ${props => props.marginRight || "4%"};
margin-top: ${props => props.marginTop || "4%"};
margin-bottom: ${props => props.marginBottom  || "4%"};
border: none;
color: ${props => props.theme.BackgroundLightGrey};
border-radius: 4px;
box-shadow: ${props => props.theme.BoxShadowWidget};
display: flex;
justify-content: center;
align-items: center;
font-size: ${props => props.fontSize || "1rem"};
aspect-ratio: ${props => props.num || 1  } / ${props => props.denom || 1};
cursor:pointer;
&:hover{
    background: rgb(1 108 31 / 76%);
}
`

const BaseButton = (props) => {
    return (
        <Button width={props.width} height={props.height} onClick={props.action} num={props.num} denom={props.denom} marginLeft={props.marginLeft} marginRight={props.marginRight} marginTop={props.marginTop} marginBottom={props.marginBottom}
        top={props.top} right={props.right} bottom={props.bottom} left={props.left} fontSize={props.fontSize}>{props.text}</Button>
    )
}

export default BaseButton