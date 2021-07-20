import Avatar from "../7_Avatar";
import DataField from "./DataField";
import { ReactComponent as Pencil } from "../../5_Assets/SVG/43_pencil.svg";
import { ReactComponent as Trash } from "../../5_Assets/SVG/recycle-bin-line.svg";
import { ReactComponent as Check } from "../../5_Assets/SVG/check-mark-box-line.svg";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Axios from "../../2_Store/Axios";
import {useDispatch, useSelector} from "react-redux";
import {
    Admin, AthleteWrapper, Container, Edit, EditTrashContain, EditWrap, FormWrapper, Left, Right, SecondEditWrap
} from "./styled";
import {fetchAllCoaches} from "../../2_Store/Fetches/get_all_coaches";
import DeleteDialogue from "./DeleteBox";
import CheckField from "./CheckField";
import styled from "styled-components";


const CoachError = styled.p`
color: red;
  height: .5vw;
`



const CoachCard = (props) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [remove, setRemove] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const myInfo = useSelector(state => state['myInfo']);
    const [keyWord] = useState('')
    const [error, setError] = useState('');

    const onEditHandler = () => {
        if (edit === true) {
            setEdit(false);
            setError('');
        } else {
            setEdit(true);
        }
    }

    const onDeleteHandler = () => {(remove === true) ? setRemove(false) : setRemove(true)};

    const changeUserDetails = async (data) => {
        console.log(data);
        const nameArray = data.name.split(' ');
        const firstName = nameArray[0];
        const lastName = nameArray[1] ? nameArray[1] : '';
        delete data["name"]
        let newForm = new FormData();
        if (data['avatar'].length > 0) {
            newForm.append('avatar', data['avatar'][0]);
        }
        if ('is_superuser' in data) {
            newForm.append('is_superuser', data['is_superuser']);
        }
        newForm.append('first_name', firstName);
        newForm.append('last_name', lastName);
        newForm.append('email', data.email);
        newForm.append('phone_number', data['phone_number']);
        newForm.append('location', data.location);
        const url = `/coach/client/${props.user.id}/`;
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        try {
            const response = await Axios.patch(url, newForm, config);
            if (response.status === 200) {
                if (props.type === 'MY_INFO') {
                    dispatch({type: 'MY_INFO', payload: response.data})
                } else if (props.type === 'COACHES') {
                    dispatch({type: "COACH_UPDATE", payload: response.data});
                } else if (props.type === "CLIENTS") {
                dispatch({type: 'CLIENT_DETAILS', payload: response.data})
        }
            }
        } catch(err) {
            if (err.response.status === 400) {
                setError('This email address is incorrect, or already taken');
                return null;
            }
        }
        onEditHandler();
    };


    return (
        <>
            <Container>
            <AthleteWrapper>
                <Avatar user={props.user['avatar']} width={80} color={'#C5C5C5'} edit={edit} var={register} name={'avatar'}/>
                {props.user['is_coach'] && props.user.id !== myInfo.id ? <CheckField edit={edit} var={register} user={props.user}/> : null}
            </AthleteWrapper>
            <FormWrapper onSubmit={handleSubmit(changeUserDetails)}>
                <Left>
                    <DataField label={'Name'} name={'name'}
                               data={props.user['full_name'] ? props.user['full_name'] : `${props.user.first_name} ${props.user.last_name}`}
                               var={register} width={100} height={50} color={props => props.theme.ELGreen} edit={edit}/>
                    {error !== '' ? <CoachError>{error}</CoachError> : <CoachError/>}
                    <DataField label={'Email'} data={props.user['email']} name={'email'}
                               var={register} width={100} height={50} color={props => props.theme.ELGreen} edit={edit}/>
                </Left>
                <Right>
                    <DataField label={'Phone Number'} data={props.user['phone_number']} name={'phone_number'}
                               message={'Phone Number must be at least 9 characters'}
                               var={register} width={100} height={50} color={props => props.theme.ELGreen} edit={edit}/>
                     {errors['phone_number'] && edit === true ? <CoachError>{errors['phone_number'].message}</CoachError> : <CoachError/>}
                    <DataField label={'Location'} data={props.user.location} name={'location'}
                               var={register} width={100} height={50} color={props => props.theme.ELGreen} edit={edit}/>
                </Right>
                {edit ? <EditWrap>
                    <Edit type={'submit'}><Check/></Edit>
                </EditWrap> : <EditWrap/>}
            </FormWrapper>
            <EditTrashContain>
                <SecondEditWrap>
                    <Edit onClick={onEditHandler}><Pencil/></Edit>
                    {edit && props.user.id !== myInfo.id ? <Edit onClick={onDeleteHandler}><Trash/></Edit> : <Edit/>}
                </SecondEditWrap>
            </EditTrashContain>
        </Container>
            {remove ? <DeleteDialogue toggle={onDeleteHandler} user={props.user}/> : null}
        </>
    )
}

export default CoachCard

