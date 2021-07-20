import styled from 'styled-components'
import BaseButton from "../../4_ButtonsInputs/Button";
import Axios from "../../../2_Store/Axios";
import {fetchAllCoaches} from "../../../2_Store/Fetches/get_all_coaches";
import {useDispatch} from "react-redux";
import {useState} from "react";


const DeleteDialogueBack = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 1000000000;
  background: ${props => props.theme.AccentGray};
  border: ${props => props.theme.CardBorder};
  opacity: 30%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const DeleteDialogueMain = styled.div`
  position: fixed;
  height: 28%;
  z-index: 1000000000;
  aspect-ratio: 2.6 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3vw 0;
  background: ${props => props.theme.CardBackColor};
  opacity: 150% !important;
  border: 1px solid ${props => props.theme.AccentGray};
  border-radius: ${props => props.theme.CardBorderRadius};
  top: 50vh;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`
const DeleteMessage = styled.h1`
color: ${props => props.theme.ELBlue};
  font-weight: 900;
  font-size: 1.8vw;
  height: 40%;
`

const ChoiceWrap = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 1vw;
  padding: 1vw 0;
  display: flex;
  justify-content: center;
`



const DeleteDialogue = (props) => {
    const dispatch = useDispatch();
    const [keyWord] = useState('')

    const DeleteUser = async (id) => {
        const url = `/coach/client/${id}/`
        const config = {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        };
        const response = await Axios.delete(url, config);
        console.log(response);
        props.toggle();
        dispatch(fetchAllCoaches(keyWord))
    }

    return (
        <>
        <DeleteDialogueBack onClick={props.toggle}>
        </DeleteDialogueBack>
        <DeleteDialogueMain>
            <DeleteMessage>Are you sure you want to delete this user?</DeleteMessage>
            <ChoiceWrap>
                <BaseButton text={"No"} width={20} height={100}  fontSize={1.6} action={props.toggle}/>
                <BaseButton text={"Yes"} width={20} height={100} denom={90} fontSize={1.6}
                            action={() => DeleteUser(props.user.id)} marginLeft={10}/>
            </ChoiceWrap>
        </DeleteDialogueMain>
        </>
    )
}

export default DeleteDialogue