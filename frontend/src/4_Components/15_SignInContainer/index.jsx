import {useLocation} from "react-router-dom";
import BaseInput from "../4_ButtonsInputs/Input";
import BaseButton from "../4_ButtonsInputs/Button";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import Axios from "../../2_Store/Axios";
import {useState} from "react";
import {ContainerTitle, ErrorMessage, InputWrapper, SIUContainerMain} from "./styled";


const SignInUpContainer = (props) => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(null);

const logIn = async (data) => {
        const url = "auth/token/";
        try {
            const response = await Axios.post(url, data);
            if (response.status === 200) {
                dispatch({type: "TOKEN", payload: response.data.access});
                localStorage.setItem("token", response.data.access);
                history.push("/");
            }
        } catch(err) {
            if (err.response.status === 400 || err.response.status === 401) {
                setError('Incorrect email or password');
                console.log(error);
            }
        }
    }

    const verifyEmail = async (data) => {
        const url = "/auth/password-reset/";
        try {
            const response = await Axios.post(url, data);
            if (response.status === 200) {
                history.push('/password/validate')
            }
        } catch(err) {
            if (err.response.status === 400 || err.response.status === 401) {
                setError('Incorrect email address');
            }
        }
    }

    return (
        <SIUContainerMain>
            <ContainerTitle>{location.pathname.includes('signin') ? 'Sign In' : 'Reset Password'}</ContainerTitle>
            {location.pathname.includes('signin') ?

                //SIGN IN INPUT FIELDS
                <InputWrapper onSubmit={handleSubmit(logIn)}>
                {errors.email ? <ErrorMessage>{errors.email.message}</ErrorMessage> : <ErrorMessage/>}
                <BaseInput  var={register} name={'email'} type={'email'} message={'Invalid Email'}
                            title={'Email'} width={65} marginTop={3} marginBottom={6}/>
                {errors.password ? <ErrorMessage>{errors.password.message}</ErrorMessage> : <ErrorMessage/>}
                <BaseInput  var={register} name={'password'} type={'password'} message={'Password Required'}
                            title={'Password'} width={65} marginBottom={8}/>
                {error ? <ErrorMessage>{error}</ErrorMessage> : <ErrorMessage/>}
                <BaseButton type={'submit'} text={'Sign In'} width={28} num={5} denom={2} fontSize={1.1} marginBottom={0}/>
                </InputWrapper> :

                // PASSWORD RESET FIELDS
                <InputWrapper onSubmit={handleSubmit(verifyEmail)}>
                    {errors.email ? <ErrorMessage>{errors.email.message}</ErrorMessage> : <ErrorMessage/>}
                    <BaseInput  var={register} name={'email'} type={'email'} message={'Invalid Email'}
                            title={'Email'} width={65} marginTop={15} marginBottom={7}/>
                    {error ? <ErrorMessage>{error}</ErrorMessage> : <ErrorMessage/>}
                    <BaseButton type={'submit'} text={'Sign In'} width={28} num={5} denom={2} fontSize={1.1} marginTop={10}/>
                </InputWrapper>
            }
        </SIUContainerMain>
    )
}

export default SignInUpContainer