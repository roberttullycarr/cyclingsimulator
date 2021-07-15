import styled from "styled-components";

export const BaseDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const RouteCardMain = styled(BaseDiv)`
width: 95%;
height: 22vw;
background: ${props => props.theme.ELWhite};
border: 1px solid #BDBDBD;
border-radius: 5px;
box-shadow: ${props => props.theme.BoxShadowWidget};
  :hover {
    cursor: pointer;
  }
`

export const RouteImgMain = styled(BaseDiv)`
width: 48%;
height: 100%;
justify-content: flex-end;
`

export const RouteImg = styled.img`
width: 90%;
height: 85%;
border-radius: 5px;
object-fit: cover;
`