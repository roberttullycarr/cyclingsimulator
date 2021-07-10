import styled from "styled-components";
import {BaseDiv} from "../styled";

export const RouteDataMain = styled(BaseDiv)`
flex-direction: column;
width: 52%;
height: 100%;
`

export const RouteTitle = styled.h1`
font-family: Roboto, sans-serif;
color: ${props => props.theme.ELBlue};
font-size: 1.8vw;
margin-bottom: 12%;
text-align: center;
`

export const DataLine = styled.div`
display: flex;
width: 75%;
height: 18%;
`

export const DataLineOne = styled(DataLine)`
border-bottom: 2px solid #C5C5C5;
`
export const DataLineTwo = styled(DataLine)`
`

export const BaseData = styled(BaseDiv)`
height: 100%;
flex-direction: column;
`
export const DataLeft = styled(BaseData)`
width: 40%;
justify-content: flex-start;
`
export const DataRight = styled(BaseData)`
width: 60%;
justify-content: flex-start;
`
export const DataNum = styled.p`
color: black;
font-weight: 700;
font-size: 1.1vw;
`

export const DataVariable = styled.p`
color: #C5C5C5;
font-weight: 700;
font-size: 1.1vw;
`

export const DataBottomLeft = styled(BaseData)`
width: 40%;
justify-content: flex-end;
`
export const DataBottomRight = styled(BaseData)`
width: 60%;
justify-content: flex-end;
`