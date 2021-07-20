import styled from "styled-components";

export const ContentCard = styled.div`
  width: 100%;
  background: ${props => props.theme.CardBackColor};
  box-shadow: ${props => props.theme.BoxShadowWidget};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
  padding: .4vw 0;
  border: ${props => props.theme.CardBorder};
  border-radius: 5px;
  margin-bottom: 1.2vw;
  
  :hover {
    cursor: pointer;
    transform: scale(1.009);
  }
      :active {
        transform: scale(.99);
    }
`;
export const ImgSVG = styled.img`
  width: 3vh;
  filter: invert(.5);
  fill: ${props => props.theme.MBGreen};
`;
export const PowerSVG = styled.div`
  width: 1.6vh;
  filter: invert(.5);
  svg{
     fill: ${props => props.theme.MBGreen};
  }
`;
export const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
`;

export const UserInfo = styled(WrapperDiv)`
justify-content: flex-start !important;
  padding-left: 4vw;
`

export const TextCard = styled.h1`
  margin-left: 14px;
  font-size: 1.2vw;
  color: ${props => props.theme.MainFontColor};
`;
export const PowerText = styled.h1`
  color: ${props => props.theme.MainFontColor};
  margin-left: 11px;
  font-size: 1.2vw;
`;
