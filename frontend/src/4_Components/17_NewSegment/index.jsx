import styled from "styled-components";
import Title from "../14_Title";

const SegmentsWrap = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const SegmentsMain = styled.div`
  width: 85%;
  height: 2vw;
  display: flex;
  background: white;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  padding: 1.2vw 1.2vw;
  border: 1px solid #BDBDBD;
  border-radius: 5px;
`;

const RouteSegments = () => {
    return (
        <SegmentsWrap>
            <Title text={'Segments'}/>
            <SegmentsMain>

            </SegmentsMain>
        </SegmentsWrap>
    )
}

export default RouteSegments

