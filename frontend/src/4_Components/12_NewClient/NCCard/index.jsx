import BaseInput, {InputTitle} from "../../4_ButtonsInputs/Input";
import BaseButton from "../../4_ButtonsInputs/Button";
import {
    AvatarLabel, AvatarWrap, CameraImage,
    CheckboxWrap,
    FileInput,
    FileInputButton,
    NCContent,
    NCContentLine,
    NewClientCardMain,
    NewClientForm
} from "./styled";
import React from "react";
import styled from "styled-components";
import camera from "../../../5_Assets/SVG/45_camera.svg"


const NewCoachError = styled.p`
  color: red;
  height: .5vw;
  font-size: 1vw;
  margin-top: .5vw;
`


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
                        <BaseInput var={props.var} name={'email'} title={'Email'} message={'this email is incorrect or already taken'}
                                   type={'email'} marginLeft={2.5} marginBottom={6} width={95}/>
                        {/*{props.error['email'] ? <NewCoachError>{props.error['email'].message}</NewCoachError> : <NewCoachError/>}*/}
                    </NCContent>
                </NCContentLine>
                <NCContentLine>
                    <NCContent>
                        <BaseInput var={props.var} name={'phone_number'} type={'number'}
                                   title={'Phone Number'} marginLeft={2.5} marginBottom={6} width={95}/>
                    </NCContent>
                    <NCContent>
                        <BaseInput var={props.var} name={'location'} type={'text'}
                                   title={'location'} marginLeft={2.5} marginBottom={6} width={95}/>
                    </NCContent>
                    <AvatarWrap>
                        <InputTitle>Avatar</InputTitle>
                        <AvatarLabel>
                            <FileInputButton>
                                <FileInput {...props.var('avatar')} type='file' name='avatar'/>
                                <CameraImage src={camera}/>
                            </FileInputButton>
                        </AvatarLabel>
                    </AvatarWrap>
                </NCContentLine>
                {props.type === 'NEW_COACH' ? <CheckboxWrap>
                    <input type={'checkbox'} {...props.var('is_superuser')} />
                    <InputTitle>is admin</InputTitle>
                </CheckboxWrap> : null}
                <NCContent>
                    <BaseButton type={'submit'} text={'Submit'} fontSize={1.4} width={45} num={5} denom={1} marginLeft={27.5} marginTop={5}/>
                </NCContent>
            </NewClientForm>
        </NewClientCardMain>
    )
}

export default NCCard