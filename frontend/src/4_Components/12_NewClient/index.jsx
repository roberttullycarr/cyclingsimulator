import {useForm} from "react-hook-form";
import BaseButton from "../4_ButtonsInputs/Button";
import Axios from "../../2_Store/Axios";
import {useState} from "react";
import {useDispatch} from "react-redux";
import NCCard from "./NCCard";
import {NewClientMain} from "./styled";


const NewClient = () => {
    const { register, handleSubmit, reset } = useForm();
    const [expand, setExpand] = useState('false');
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
            {expand === "true" ? <NCCard var={register} submitFunc={handleSubmit(submitHandler)}/> : null}
        </NewClientMain>
    )
}

export default NewClient