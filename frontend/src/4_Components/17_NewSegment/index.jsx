import styled from "styled-components";
import Title from "../14_Title";
import BaseButton from "../4_ButtonsInputs/Button";
import {useSelector} from "react-redux";
import SegmentLine from "./SegmentLine";
import {useState} from "react";
import NewSegmentLine from "./NewSegmentLine";
import SegmentHeaders from "./SegmentHeaders";

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
    const [edit, setEdit] = useState(false)
    const route = useSelector(state => state.specificRoute);
    const onEditHandler = () => {(edit === true) ? setEdit(false) : setEdit(true)};


    return (
        <SegmentsWrap>
            <Title text={'Segments'}/>
            <SegmentsMain>
                <SegmentHeaders/>
                {route['segments'] && route.segments.length > 0 ? route.segments.map((segment) => <SegmentLine segment={segment}/>) :
                    <NoSegText>This route currently has no segments. Click to add some!</NoSegText>}
                {edit ? null : <NewSegmentLine index={route.id}/>}
                <BaseButton text={'Add Segment'} action={onEditHandler} width={12} num={4} denom={1} fontSize={1.1}/>
            </SegmentsMain>
        </SegmentsWrap>
    )
}

export default RouteSegments

