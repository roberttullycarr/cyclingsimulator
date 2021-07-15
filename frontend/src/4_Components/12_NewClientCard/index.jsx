import {ClientCardMain} from "../11_ClientCard";
import BaseInput from "../4_ButtonsInputs/Input";
import {useForm} from "react-hook-form";
import styled from "styled-components";
import BaseButton from "../4_ButtonsInputs/Button";
import Axios from "../../2_Store/Axios";

const NewClientForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 8% 0;
`
const FormTitle = styled.h2`
  font-size: 2vw;
  font-family: roboto,sans-serif;
  font-weight: 700;
  color: ${props => props.theme.ELBlue};
  margin-bottom: 5%;
`

const FileInput = styled.input`
  width: 80%;
  margin-bottom: 5%;
`

const NewClientCard = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = async (data) => {
        const url = '/coach/client/new/';
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        let newForm = new FormData()
        newForm.append('avatar', data.avatar[0])
        newForm.append('first_name', data.first_name)
        newForm.append('last_name', data.last_name)
        newForm.append('email', data.email)
        const response = await Axios.post(url, newForm, config);
    }

    return (
        <ClientCardMain>
            <NewClientForm onSubmit={handleSubmit(submitHandler)}>
                <FormTitle>Add a new client</FormTitle>
                <BaseInput var={register} name={'first_name'} type={'text'} message={'No first name added'}
                           title={'First Name'} width={80} height={12} marginBottom={10}/>
                <BaseInput var={register} name={'last_name'} type={'text'} message={'No first name added'}
                           title={'Last Name'} width={80} height={12} marginBottom={10}/>
                <BaseInput var={register} name={'email'} type={'email'} message={'Invalid Email'}
                           title={'Email'} width={80} height={12} marginBottom={12}/>
                <FileInput {...register('avatar')} type='file' />
                <BaseButton text={'Submit'} type={'submit'} width={30} height={10} fontSize={1.4}/>
            </NewClientForm>
        </ClientCardMain>
    )
}

export default NewClientCard