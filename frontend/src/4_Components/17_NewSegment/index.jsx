import styled from "styled-components";
import Title from "../14_Title";
import BaseButton from "../4_ButtonsInputs/Button";
import {useSelector} from "react-redux";

const SegmentsWrap = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const SegmentsMain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  padding: 1.2vw 1.2vw;
  border: 1px solid #BDBDBD;
  border-radius: 5px;
`;

const NoSegText = styled.h1`
  font-size: 1.2vw;
  margin-bottom: 1.5vw;
`


const RouteSegments = (props) => {
    const route = useSelector(state => state.specificRoute);


    return (
        <SegmentsWrap>
            <Title text={'Segments'}/>
            <SegmentsMain>
                {route['segments'] && route.segments.length > 0 ? <p>hello</p> :
                    <NoSegText>This route currently has no segments.  Click the button to add some!</NoSegText>}
                <BaseButton text={'Add Segment'} width={10} num={5} denom={1}/>
            </SegmentsMain>
        </SegmentsWrap>
    )
}

export default RouteSegments

