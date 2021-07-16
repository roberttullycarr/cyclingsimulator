import {NSLForm, NSLInputMain, NSLMain, NSLOptionTitle} from "../NewSegmentLine";
import styled from "styled-components";

const HeadersMain = styled(NSLMain)`
height: 2vw;
  margin-top: 1vw;
`

const HeaderWrap = styled(NSLForm)`
padding-left: 0 !important;
`

const SegmentHeaderMain = styled(NSLInputMain)`
justify-content: center;
  align-items: center;
  height: 1vw;
`

const SegmentHeaders = () => {
    return (
        <HeadersMain>
            <HeaderWrap>
                <SegmentHeaderMain>
                    <NSLOptionTitle>Start (M)</NSLOptionTitle>
                </SegmentHeaderMain>
                <SegmentHeaderMain>
                    <NSLOptionTitle>End (M)</NSLOptionTitle>
                </SegmentHeaderMain>
                <SegmentHeaderMain>
                    <NSLOptionTitle>Elevation</NSLOptionTitle>
                </SegmentHeaderMain>
                <SegmentHeaderMain>
                    <NSLOptionTitle>Average Grade (%)</NSLOptionTitle>
                </SegmentHeaderMain>
            </HeaderWrap>
        </HeadersMain>
    )
}

export default SegmentHeaders