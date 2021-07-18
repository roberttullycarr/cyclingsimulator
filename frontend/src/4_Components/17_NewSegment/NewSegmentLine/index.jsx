import styled from "styled-components"
import BaseButton from "../../4_ButtonsInputs/Button";
import {SLForm, SLMain, SLSaveBtn} from "../SegmentLine";
import {useForm} from "react-hook-form";
import BaseInput from "../../4_ButtonsInputs/Input";
import Axios from "../../../2_Store/Axios";
import {useDispatch, useSelector} from "react-redux";
import OptionField from "../../13_RouteOptions/OptionField";
import {elevation} from "../../../3_Pages/2_Coach/2_5_Results/simulation_variables";

export const NSLMain = styled(SLMain)`
  margin-top: 1vw;
height: 5vw;
`
export const NSLForm = styled(SLForm)`
  width: 100% !important;
  //border: 1px solid blue;
  margin: 0;
  padding-left: 3%;
`

export const NSLOptionTitle = styled.h2`
//margin: 0 0 .5% 2%;
color: ${props => props.theme.ELBlue};
font-family: Roboto, sans-serif;
font-size: 1.1vw;
text-align: left;
`

const NSLSaveBtn = styled(SLSaveBtn)`
  justify-content: flex-end !important;
  align-items: center;
  width: 8% !important;
  //border: 1px solid green;
`

export const NSLInputMain = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  width: 23%;
  //border: 1px solid purple;
`

const NewSegmentLine = (props) => {
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const route = useSelector(state => state.specificRoute);
    // const lastSegment = route ? route.segments.slice(-1) : {};

    console.log(route);

    const makeNewSegment = async (data) => {
        console.log(data);
        const url = `/segments/new/${props.index}/`;
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        const response = await Axios.post(url, data, config);
        console.log(response.data);
        dispatch({type: 'NEW_SEGMENT', payload: response.data})
        reset();
    }


    return (
        <NSLMain>
            <NSLForm onSubmit={handleSubmit(makeNewSegment)}>
                <NSLInputMain>
                    <BaseInput var={register} title={'Start (M)'} width={90} name={'start'} height={50} />
                </NSLInputMain>
                <NSLInputMain>
                    <BaseInput var={register} title={'End (M)'} width={90} name={'end'} height={50} />
                </NSLInputMain>
                <NSLInputMain>
                    <NSLOptionTitle>Elevation</NSLOptionTitle>
                    <OptionField options={elevation} register={register} title={'Elevation (M)'} width={90} name={'elevation'} height={50} />
                </NSLInputMain>
                <NSLInputMain>
                    <BaseInput var={register} title={'Average Grade (%)'} width={90} name={'average_grade'} height={50} />
                </NSLInputMain>
                <NSLSaveBtn>
                    <BaseButton text={'Save'} type={'submit'} width={100} height={50} marginTop={5} fontSize={1.1}/>
                </NSLSaveBtn>
            </NSLForm>
        </NSLMain>
    )
}

export default NewSegmentLine