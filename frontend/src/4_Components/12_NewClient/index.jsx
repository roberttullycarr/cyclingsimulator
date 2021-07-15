import {ClientCardMain} from "../11_ClientCard";
import BaseInput from "../4_ButtonsInputs/Input";
import {useForm} from "react-hook-form";
import styled from "styled-components";
import BaseButton from "../4_ButtonsInputs/Button";
import Axios from "../../2_Store/Axios";
import NRCard from "../24_NewRoute/NRCard";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import NCCard from "./NCCard";

const NewClientMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  //margin-bottom: 2vw;
`

const NewClient = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [expand, setExpand] = useState('false');
    const history = useHistory();
    const dispatch = useDispatch();

    const clickHandler = () => {expand === 'false' ? setExpand('true') : setExpand('false')}

    const submitHandler = async (data) => {
        const url = '/coach/client/new/';
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        let newForm = new FormData();
        if (data.avatar.length > 0) {
            newForm.append('avatar', data.avatar[0]);
        }
        newForm.append('first_name', data.first_name);
        newForm.append('last_name', data.last_name);
        newForm.append('email', data.email);
        newForm.append('phone_number', data.phone_number)
        const response = await Axios.post(url, newForm, config);
        console.log(response.data);
        dispatch({"type": 'NEW_CLIENT', "payload": response.data});
        clickHandler();
        reset();
    }

    return (
        <NewClientMain>
            <BaseButton action={clickHandler} text={"New Client"} width={15} num={5} denom={1} fontSize={1.4} />
            {expand === "true" ? <NCCard submitFunc={submitHandler}/> : null}
        </NewClientMain>
    )
}

export default NewClient