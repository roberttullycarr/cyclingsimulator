import {useForm} from "react-hook-form";
import BaseButton from "../4_ButtonsInputs/Button";
import Axios from "../../2_Store/Axios";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import NCCard from "./NCCard";
import {NewClientMain} from "./styled";
import styled from "styled-components";

const NewUserError = styled.p`
  margin-top:1vw;
color: red;
  height: .5vw;
`

const NewClient = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [expand, setExpand] = useState('false');
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const clickHandler = () => {
        if (expand === 'true') {
            setExpand('false');
            setError('');
            reset()
        } else {
            setExpand('true');
        }
    }

    const submitHandler = async (data) => {
        const url = `${props.url}`;
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        let newForm = new FormData();
        if (data['avatar'].length > 0) {
            newForm.append('avatar', data['avatar'][0]);
        }
        if (data['is_superuser']) {
            newForm.append('is_superuser', data['is_superuser']);
        }
        newForm.append('first_name', data.first_name);
        newForm.append('last_name', data.last_name);
        newForm.append('email', data.email);
        newForm.append('phone_number', data['phone_number']);
        newForm.append('location', data.location);
        try {
            const response = await Axios.post(url, newForm, config);
            if (response.status === 201) {
                dispatch({"type": `${props.type}`, "payload": response.data});
            }
        } catch(err) {
            if (err.response.status === 400) {
                setError('This email address is incorrect, or already taken');
                return null;
            }
        }
        clickHandler();
        reset();
    }


    return (
        <NewClientMain>
            <BaseButton action={clickHandler} text={props.text} width={15} num={5} denom={1} fontSize={1.4} />
            {error !== '' ? <NewUserError>{error}</NewUserError> : <NewUserError/>}
            {expand === "true" ? <NCCard var={register} type={props.type} error={errors} submitFunc={handleSubmit(submitHandler)}/> : null}
        </NewClientMain>
    )
}

export default NewClient