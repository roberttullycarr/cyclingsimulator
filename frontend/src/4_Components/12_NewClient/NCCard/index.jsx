import styled from "styled-components";
import BaseInput, {InputTitle} from "../../4_ButtonsInputs/Input";
import {useForm} from "react-hook-form";
import BaseButton from "../../4_ButtonsInputs/Button";

const NewClientCardMain = styled.div`
  width: 100%;
  display: flex;
  background: white;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  padding: 1.2vw 1.2vw;
  border: 1px solid #BDBDBD;
  border-radius: 5px;
  margin-top: 2vw;
`;

const NewClientForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const NCContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 33.33%;
  height: 100%;
`

const NCContentLine = styled.div`
  width: 100%;
  display:flex;
  padding: .5vw 0;
`

const FileInput = styled.input`
  width: 95%;
  margin-top: 3%;
  margin-left: 3%;
`

const NCCard = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <NewClientCardMain>
            <NewClientForm onSubmit={handleSubmit(props.submitFunc)}>
                <NCContentLine>
                    <NCContent>
                        <BaseInput var={register} name={'first_name'} title={'First Name'}
                                   type={'text'} marginLeft={2.5} marginBottom={6} width={95}/>
                    </NCContent>
                    <NCContent>
                        <BaseInput var={register} name={'last_name'} title={'Last Name'}
                                   type={'text'} marginLeft={2.5} marginBottom={6} width={95}/>
                    </NCContent>
                    <NCContent>
                        <BaseInput var={register} name={'email'} title={'Email'}
                                   type={'email'} marginLeft={2.5} marginBottom={6} width={95}/>
                    </NCContent>
                </NCContentLine>
                <NCContentLine>
                    <NCContent>
                        <BaseInput var={register} name={'phone_number'} type={'number'}
                                   title={'Phone Number'} marginLeft={2.5} marginBottom={6} width={95}/>
                    </NCContent>
                    <NCContent>
                        <InputTitle>Avatar</InputTitle>
                        <FileInput {...register('avatar')} type='file' name='avatar'/>
                    </NCContent>
                <NCContent>
                    <BaseButton type={'submit'} text={'Submit'} width={60} num={5} denom={1} marginLeft={20} marginTop={5}/>
                </NCContent>
                </NCContentLine>
            </NewClientForm>
        </NewClientCardMain>
    )
}

export default NCCard