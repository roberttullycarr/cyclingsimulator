import BaseButton from "../4_ButtonsInputs/Button";
import BaseInput from "../4_ButtonsInputs/Input";
import {useForm} from "react-hook-form";
import Avatar from "../7_Avatar";
import {useState} from "react";
import {ButtonWrap, FormWrap, NewSessionCard, NewSessionMain, NSContent, SessionClient, UserContent} from "./styled";
import Axios from "../../2_Store/Axios";
import {useDispatch} from "react-redux";
import styled from "styled-components";

export const NewSessionError = styled.p`
  color: red;
  height: .5vw;
  font-size: 1vw;
  margin-top: .5vw;
`


const NewSession = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [expand, setExpand] = useState('false');
    const dispatch = useDispatch();

    const clickHandler = () => expand === 'false' ? setExpand('true') : setExpand('false');

    const createNewSession = async (data) => {
        const url = `/sessions/new/${props.client.id}/`;
        const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        try {
            const response = await Axios.post(url, data, config);
            if (response.status === 201) {
                const action = {
                    "type": 'NEW_SESSION',
                    "payload": response.data,
                };
                    dispatch(action);
            }
        } catch(err) {
            if (err.response.status === 400 || err.response.status === 401) {
                console.log(err.response.status);
            }
        }
        reset()
        clickHandler()
    };

    return (
        <NewSessionMain>
            <BaseButton action={clickHandler}
                        text={"New Session"} width={15} num={5} denom={1} fontSize={1.4} />
            {expand === 'true' ? <NewSessionCard>
                <FormWrap onSubmit={handleSubmit(createNewSession)}>
                    <UserContent>
                        <Avatar width={23} marginLeft={"0"} marginRight={"0"} user={props.client['avatar']}/>
                        <SessionClient>{props.client['full_name']}</SessionClient>
                    </UserContent>
                    <NSContent>
                        <BaseInput var={register} width={80} height={35} name={'pat'} title={'Power (W)'}
                                   type={'number'} marginTop={0} marginBottom={9} message={'This field is required'}/>
                        {errors.pat ? <NewSessionError>{errors.pat.message}</NewSessionError> : <NewSessionError/>}
                    </NSContent>
                    <NSContent>
                        <BaseInput var={register} width={80} height={35} name={'heart_rate'} title={'Heart Rate (BPM)'}
                                   type={'number'} marginBottom={9} message={'This field is required'}/>
                        {errors.heart_rate ? <NewSessionError>{errors.heart_rate.message}</NewSessionError> : <NewSessionError/>}
                    </NSContent>
                    <NSContent>
                        <BaseInput var={register} width={80} height={35} name={'weight'} title={'weight (KG)'}
                                   type={'number'} marginBottom={9} message={'This field is required'}/>
                        {errors.weight ? <NewSessionError>{errors.weight.message}</NewSessionError> : <NewSessionError/>}
                    </NSContent>
                    <NSContent>
                        <BaseInput var={register} width={80} height={35} name={'height'} title={'Height (CM)'}
                                   type={'number'} marginBottom={9} message={'This field is required'}/>
                        {errors.height ? <NewSessionError>{errors.height.message}</NewSessionError> : <NewSessionError/>}
                    </NSContent>
                    <ButtonWrap>
                        <BaseButton type={'submit'} text={"Submit"} num={6} width={80}
                                    denom={2} fontSize={1.3} />
                    </ButtonWrap>
                </FormWrap>
            </NewSessionCard> : null}
        </NewSessionMain>
    )
}

export default NewSession
