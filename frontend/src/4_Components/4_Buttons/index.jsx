import styled from 'styled-components'

const Button = styled.button`
background: ${props => props.theme.ELGreen};
width: ${props => `${props.width}` || '40px'};
height: ${props => `${props.height}` || '20px'};
margin: ${props => `${props.top}%` || '0%'} ${props => props.right || '0%'} 
${props => props.bottom || '0%'} ${props => props.left || '0%'};
border: none;
color: ${props => props.theme.BackgroundLightGrey};
border-radius: 4px;
box-shadow: ${props => props.theme.BoxShadowWidget};
display: flex;
justify-content: center;
align-items: center;
font-size: ${props => `${props.fontSize}vw`};
aspect-ratio: ${props => props.num} / ${props => props.denom};
`

const BaseButton = (props) => {
    return (
        <Button width={props.width} height={props.height} onClick={props.action} num={props.num} denom={props.denom}
        top={props.top} right={props.right} bottom={props.bottom} left={props.left} fontSize={props.fontSize}>{props.text}</Button>
    )
}

export default BaseButton