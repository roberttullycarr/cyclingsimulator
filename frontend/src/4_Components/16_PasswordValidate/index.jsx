import styled from "styled-components";
import {ContainerTitle, ErrorMessage, InputWrapper} from "../15_SignInContainer/styled";
import BaseInput from "../4_ButtonsInputs/Input";
import {useForm} from "react-hook-form";
import BaseButton from "../4_ButtonsInputs/Button";
import Axios from "../../2_Store/Axios";
import {useHistory} from "react-router-dom";
import {useState} from "react";

const PVContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  aspect-ratio: 3 / 2;
  background: ${props => props.theme.ELWhite};
  border: 1px solid #BDBDBD;
  border-radius: 5px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  align-items: center;
`



const PasswordValidate = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    const [error, setError] = useState(null);

    const validatePassword = async (data) => {
        const url = "/auth/password-reset/validation/";
        try {
            const response = await Axios.patch(url, data);
            if (response.status === 200) {
                history.push('/signin')
            }
        } catch(err) {
            if (err.response.status === 400 || err.response.status === 401) {
                setError('Incorrect email, passwords or verification code');
            }
        }
    }
    return (
        <PVContainerMain>
            <ContainerTitle>Validation</ContainerTitle>
            {error ? <ErrorMessage>{error}</ErrorMessage> : <ErrorMessage/>}
            <InputWrapper onSubmit={handleSubmit(validatePassword)}>
                <BaseInput var={register} type={'number'} height={10} width={70} name={'code'} marginTop={2}
                           title={"Validation Code"} message={true}/>

                <BaseInput var={register} type={"email"} height={10} width={70} name={'email'} marginTop={4}
                           title={"Email"} message={true}/>

                <BaseInput var={register} width={70} height={10} type={'password'} name={'password'} marginTop={4}
                           title={"Password"} message={true}/>

                <BaseInput var={register} width={70} height={10} type={'password'} name={'password_repeat'} marginTop={4}
                           title={"Password Repeat"} message={true} />
                <BaseButton type={'submit'} text={"Submit"} fontSize={1.4} marginTop={7} width={15} height={10}
                            marginBottom={0}/>
            </InputWrapper>
        </PVContainerMain>
    )
}

export default PasswordValidate