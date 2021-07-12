import styled from "styled-components"
import {useLocation} from "react-router-dom";
import BaseInput from "../4_ButtonsInputs/Input";
import BaseButton from "../4_ButtonsInputs/Button";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import Axios from "../../2_Store/Axios";
import {useState} from "react";
import {ContainerTitle, ErrorMessage, InputWrapper, SIUContainerMain} from "./styled";


const SignInUpContainer = (props) => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [error, setError] = useState(null);

const onSubmit = async (data) => {
        const url = "auth/token/";
        try {
            const response = await Axios.post(url, data);
            if (response.status === 200) {
                dispatch({type: "TOKEN", payload: response.data.access});
                localStorage.setItem("token", response.data.access);
                history.push("/coach/overview");
            }
        }
        catch(err) {
            if (err.response.status === 400 || err.response.status === 401) {
                setError('Incorrect email or password');
                console.log(error);
            }
        }
    }
console.log(errors.password);
    return (
        <SIUContainerMain>
            <ContainerTitle>{location.pathname.includes('signin') ? 'Sign In' : 'Sign Up'}</ContainerTitle>
            <InputWrapper onSubmit={handleSubmit(onSubmit)}>
                {errors.email ? <ErrorMessage>{errors.email.message}</ErrorMessage> : <ErrorMessage/>}
                <BaseInput  var={register} name={'email'} type={'email'} message={'Invalid Email'}
                            title={'Email'} width={65} marginTop={0} marginBottom={6}/>
                {errors.password ? <ErrorMessage>{errors.password.message}</ErrorMessage> : <ErrorMessage/>}
                <BaseInput  var={register} name={'password'} type={'password'} message={'Password Required'}
                            title={'Password'} width={65} marginBottom={5}/>
                {error ? <ErrorMessage>{error}</ErrorMessage> : <ErrorMessage/>}
                <BaseButton type={'submit'} text={'Sign In'} width={28} num={5} denom={2} fontSize={1.1} marginBottom={0}/>
            </InputWrapper>
        </SIUContainerMain>
    )
}

export default SignInUpContainer