import BaseButton from "../4_ButtonsInputs/Button";
import BaseInput from "../4_ButtonsInputs/Input";
import {useForm} from "react-hook-form";
import Avatar from "../7_Avatar";
import {useState} from "react";
import {ButtonWrap, FormWrap, NewSessionCard, NewSessionMain, NSContent, SessionClient} from "./styled";
import Axios from "../../2_Store/Axios";
import {useDispatch} from "react-redux";


const NewSession = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [expand, setExpand] = useState('false');
    const dispatch = useDispatch();

    const clickHandler = () => {expand === 'false' ? setExpand('true') : setExpand('false')};
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
    };

    return (
        <NewSessionMain>
            <BaseButton action={clickHandler}
                        text={"New Session"} width={15} num={5} denom={1} fontSize={1.4} />
            {expand === 'true' ? <NewSessionCard>
                <FormWrap onSubmit={handleSubmit(createNewSession)}>
                    <NSContent>
                        <Avatar width={23} marginLeft={"0"} marginRight={"0"} user={props.client.avatar}/>
                        <SessionClient>{props.client.full_name}</SessionClient>
                    </NSContent>
                    <NSContent>
                        <BaseInput var={register} width={80} height={50} name={'pat'} title={'Power (W)'}
                                   type={'number'} marginTop={0} marginBottom={9}/>
                    </NSContent>
                    <NSContent>
                        <BaseInput var={register} width={80} height={50} name={'heart_rate'} title={'Heart Rate (BPM)'}
                                   type={'number'} marginBottom={9}/>
                    </NSContent>
                    <NSContent>
                        <BaseInput var={register} width={80} height={50} name={'weight'} title={'weight (KG)'}
                                   type={'number'} marginBottom={9}/>
                    </NSContent>
                    <NSContent>
                        <BaseInput var={register} width={80} height={50} name={'height'} title={'Height (CM)'}
                                   type={'number'} marginBottom={9}/>
                    </NSContent>
                    <ButtonWrap>
                        <BaseButton type={'submit'} text={"Submit"} height={70} num={3} denom={1} fontSize={1.3} marginLeft={20}/>
                    </ButtonWrap>
                </FormWrap>
            </NewSessionCard> : null}
        </NewSessionMain>
    )
};

export default NewSession
