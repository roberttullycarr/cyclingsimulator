import BaseInput, {InputTitle} from "../../4_ButtonsInputs/Input";
import BaseButton from "../../4_ButtonsInputs/Button";
import {FileInput, NCContent, NCContentLine, NewClientCardMain, NewClientForm} from "./styled";


const NCCard = (props) => {
    return (
        <NewClientCardMain>
            <NewClientForm onSubmit={props.submitFunc}>
                <NCContentLine>
                    <NCContent>
                        <BaseInput var={props.var} name={'first_name'} title={'First Name'}
                                   type={'text'} marginLeft={2.5} marginBottom={6} width={95}/>
                    </NCContent>
                    <NCContent>
                        <BaseInput var={props.var} name={'last_name'} title={'Last Name'}
                                   type={'text'} marginLeft={2.5} marginBottom={6} width={95}/>
                    </NCContent>
                    <NCContent>
                        <BaseInput var={props.var} name={'email'} title={'Email'}
                                   type={'email'} marginLeft={2.5} marginBottom={6} width={95}/>
                    </NCContent>
                </NCContentLine>
                <NCContentLine>
                    <NCContent>
                        <BaseInput var={props.var} name={'phone_number'} type={'number'}
                                   title={'Phone Number'} marginLeft={2.5} marginBottom={6} width={95}/>
                    </NCContent>
                    <NCContent>
                        <InputTitle>Avatar</InputTitle>
                        <FileInput {...props.var('avatar')} type='file' name='avatar'/>
                    </NCContent>
                <NCContent>
                    <BaseButton type={'submit'} text={'Submit'} fontSize={1.4} width={45} num={5} denom={1} marginLeft={27.5} marginTop={5}/>
                </NCContent>
                </NCContentLine>
            </NewClientForm>
        </NewClientCardMain>
    )
}

export default NCCard