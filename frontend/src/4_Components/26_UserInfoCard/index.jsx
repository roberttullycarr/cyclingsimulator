import styled from "styled-components";
import Avatar from "../7_Avatar";
import DataField from "./DataField";
import BaseButton from "../4_ButtonsInputs/Button";
import { ReactComponent as Pencil } from "../../5_Assets/SVG/43_pencil.svg";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import Axios from "../../2_Store/Axios";
import {useDispatch} from "react-redux";

const Container = styled.div`
  aspect-ratio: 8.95 / 1;
  width: 85%;
  height: auto;
  display: flex;
  background: ${props => props.theme.ELWhite};
  border: solid 1px ${props => props.theme.BorderColor};
  border-radius: 5px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  margin-top: 2vw;
  margin-bottom: 1vw;
`

const AthleteWrapper = styled.div`
  width: 10%;
  margin-left: 1.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FormWrapper = styled.form`
  width: 80%;
  display: flex;
  margin: 0 0;
`

const SaveBtnWrap = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WrapperRight = styled(SaveBtnWrap)`
`
const EditWrap = styled.div`
height: 100%;
  width: 3%;
  padding-top: .5%;
`

const Edit = styled.button`
  width: 75%;
  border: none;
  background-color: transparent;
  margin: 7% 7% 0 0;
  svg{
    width: 100%;
    height: 100%;
  }
`

const Left = styled.div`
  width: 50%;
`

const Right = styled.div`
  width: 50%;
`

const UserInfoCard = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onEditHandler = () => {(edit === true) ? setEdit(false) : setEdit(true)};

    const changeUserDetails = async (data) => {
        console.log('in the change user details');
        const nameArray = data.name.split(' ');
        const firstName = nameArray[0];
        const lastName = nameArray[1] ? nameArray[1] : '';
        delete data["name"]
        const fullData = {...data, 'first_name': firstName, 'last_name': lastName};
        const url = `/coach/client/${props.user.id}/`;
        console.log(url);
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        const response = await Axios.patch(url, fullData, config);
        dispatch({type: 'CLIENT_DETAILS', payload: response.data})
        onEditHandler();
    };

    return (
        <Container>
            <AthleteWrapper>
                <Avatar user={props.user.avatar} width={80} color={'#C5C5C5'}/>
            </AthleteWrapper>
            <FormWrapper onSubmit={handleSubmit(changeUserDetails)}>
                <Left>
                    <DataField label={'Name'} name={'name'}
                               data={props.user.full_name ? props.user.full_name : `${props.user.first_name} ${props.user.last_name}`}
                               var={register} width={100} height={50} color={props => props.theme.ELGreen} edit={edit} />
                    <DataField label={'Email'} data={props.user.email} name={'email'}
                               var={register} width={100} height={50} color={props => props.theme.ELGreen} edit={edit}/>
                </Left>
                <Right>
                    <DataField label={'Phone Number'} data={props.user.phone_number} name={'phone_number'}
                               var={register} width={100} height={50} color={props => props.theme.ELGreen} edit={edit}/>
                    <DataField label={'Location'} data={props.user.location} name={'location'}
                               var={register} width={100} height={50} color={props => props.theme.ELGreen} edit={edit}/>
                </Right>
                <SaveBtnWrap>
                    <BaseButton text={'Save'} type={'submit'} height={25} width={90} fontSize={.9}
                            marginRight={0} visibility={edit ? 'visible' : 'hidden'}/>
                </SaveBtnWrap>
            </FormWrapper>
            <WrapperRight>
                    <BaseButton text={'Reset Password'} action={() => history.push('/password/reset')}
                            height={25} width={90} fontSize={.9}
                            marginRight={0} visibility={edit ? 'visible' : 'hidden'}/>
            </WrapperRight>
            <EditWrap>
                <Edit onClick={onEditHandler}><Pencil/></Edit>
            </EditWrap>
        </Container>
    )
}

export default UserInfoCard

