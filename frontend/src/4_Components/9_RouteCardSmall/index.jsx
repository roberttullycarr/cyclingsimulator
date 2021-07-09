import styled from "styled-components";

const RouteCardMain = styled.div`
width: 90%;
height: 22vw;
background: ${props => props.theme.ELWhite};
border: 1px solid #BDBDBD;
border-radius: 5px;
box-shadow: ${props => props.theme.BoxShadowWidget};
`

const RouteCardSmall = () => {
    return (
        <RouteCardMain>

        </RouteCardMain>
    )
}

export default RouteCardSmall