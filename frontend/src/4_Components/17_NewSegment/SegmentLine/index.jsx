import styled from "styled-components"
import { ReactComponent as Pencil } from "../../../5_Assets/SVG/43_pencil.svg";
import { ReactComponent as Trash } from "../../../5_Assets/SVG/recycle-bin-line.svg";
import {useState} from "react";
import {useForm} from "react-hook-form";
import SLData from "../SLData";
import BaseButton from "../../4_ButtonsInputs/Button";
import Axios from "../../../2_Store/Axios";
import {fetchSpecificRoute} from "../../../2_Store/Fetches/route_details";
import {useDispatch, useSelector} from "react-redux";

export const SLMain = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  border-bottom: 1px solid lightgrey;
  //margin-top: .5vw;
  height: 2.5vw;
`

export const SLForm =styled.form`
  display: flex;
  height: 100%;
  width: 90%;
  //border: 1px solid orange;
`

export const SLSaveBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 5%;
  //border: 1px solid red;
  
  :hover {
    transform: scale(1.01);
  }
  :active {
    transform: scale(1);
  }
`

export const Edit = styled.button`
  width: 5%;
  //border: 1px solid blue;
  border: none;
  background-color: transparent;
  svg {
    width: 60%;
    height: 60%;
    fill: black;
  }
    :hover {
      transform: scale(1.10);
      cursor: pointer;
      svg{
        fill: ${props => props.theme.MBLinkColor};
      }
 
  :active {
    transform: scale(1);
    cursor: pointer;
  }
  }
`


const SegmentLine = (props) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit } = useForm();
    const { id, start, end, elevation, average_grade } = props.segment;
    const route = useSelector(state => state.specificRoute);

    const onEditHandler = () => {(edit === true) ? setEdit(false) : setEdit(true)};

    const deleteSegment = async (segment_id) => {
        const url = `/segment/${segment_id}/`;
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        await Axios.delete(url, config);
        const session_id = route.id;
        dispatch(fetchSpecificRoute(session_id))
    }

    const editSegment = async (data) => {
        const url = `/segment/${id}/`;
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        await Axios.patch(url, data, config);
        const session_id = route.id;
        dispatch(fetchSpecificRoute(session_id))
        onEditHandler();
    }

    return (
        <SLMain>
            <SLForm onSubmit={handleSubmit(editSegment)}>
                <SLData data={`${start}`} edit={edit} var={register} name={'start'}/>
                <SLData data={`${end}`} edit={edit} var={register} name={'end'}/>
                <SLData data={`${elevation}`} edit={edit} var={register} name={'elevation'}/>
                <SLData data={`${average_grade}`} edit={edit} var={register} name={'average_grade'}/>
                {edit ?
                    <SLSaveBtn>
                        <BaseButton text={'Save'} type={'submit'} width={90} marginBottom={2}/>
                    </SLSaveBtn> : null}
            </SLForm>
            <Edit onClick={onEditHandler}><Pencil/></Edit>
            <Edit onClick={() => deleteSegment(id)}><Trash/></Edit>
        </SLMain>
    )
}

export default SegmentLine