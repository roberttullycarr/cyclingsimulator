import styled from "styled-components";
import arrowThin from "../../5_Assets/SVG/41_arrow.svg";

export const Container = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
  width: 85%;
`

export const Card = styled.div`
  position: relative;
  aspect-ratio: 4.05 / 1;
  width: 100%;
  height: ${props => (props.expand === 'hidden') ? '23vw' : '108vw'};
  transition: all 0.7s linear;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.ELWhite};
  border: solid 1px ${props => props.theme.BorderColor};
  border-radius: 3px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  button{
    margin-right: 2%;
    margin-bottom: 2%;
  }
`

export const Name = styled.h1`
  font-size: 1.2vw;
`

export const WrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.875vw;
  height: 2.78vw;
  padding-left: 1.875vw;
`

export const Wrapper = styled.div`
  display: flex;
  padding-left: 1.875vw;
  img{
    width: 16vw;
    height: 16vw;
    object-position: middle middle;
    object-fit: cover;
    border-radius: 5px;
  }
`

export const BottomWrapper = styled.div`
  width: 100%;
  margin-top: 1.875vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: ${props => props.expand};
  transition: all 0.7s linear;
  overflow: hidden;
`

export const Stats = styled.div`
  height: 16vw;
  width: 60%;
  margin-left: 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 2px 1fr;
  align-items: center;
  .StatField{
    align-self: center;
    justify-self: center;
  }
`

export const Line = styled.div`
  border: solid 1px ${props => props.theme.BorderColor};
  grid-row: 2 / 2;
  grid-column: 1 / 4;
`

export const ArrowButton = styled.button`
  background-image: url(${arrowThin});
  background-size: cover;
  width: 2.812vw;
  height: 1.458vw;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
  position: absolute;
  z-index: 2;
  bottom: 0px;
  right: 0px;
  transform: ${props => (props.expand === 'hidden') ? '0' : 'rotate(0.5turn)'};
  transition: all 0.7s linear;
`