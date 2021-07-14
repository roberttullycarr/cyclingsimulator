import styled from "styled-components";
import Avatar from "../7_Avatar";
import DataField from "./DataField";
import BaseButton from "../4_ButtonsInputs/Button";
import { ReactComponent as Pencil } from "../../5_Assets/SVG/43_pencil.svg";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

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

const Wrapper = styled.div`
  width: 73.5%;
  display: flex;
  margin-left: 1.5%;
`

const WrapperRight = styled.div`
  width: 13%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`

const Edit = styled.button`
  height: 20%;
  width: 20%;
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
    const [edit, setEdit] = useState(false)

    const onEditHandler = () => {(edit === true) ? setEdit(false) : setEdit(true)};

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <Container>
            <AthleteWrapper>
                <Avatar user={props.user.avatar} width={80} color={'#C5C5C5'}/>
            </AthleteWrapper>
            <Wrapper>
                <Left>
                    <DataField label={'Name'}
                               data={props.user.full_name ? props.user.full_name : `${props.user.first_name} ${props.user.last_name}`}
                               var={register} width={100} height={50} color={props => props.theme.ELGreen} edit={edit} />
                    <DataField label={'Email'} data={props.user.email}
                               var={register} width={100} height={50} color={props => props.theme.ELGreen} edit={edit}/>
                </Left>
                <Right>
                    <DataField label={'Phone Number'} data={'+41763312020'}
                               var={register} width={100} height={50} color={props => props.theme.ELGreen} edit={edit}/>
                    <DataField label={'Location'} data={props.user.location}
                               var={register} width={100} height={50} color={props => props.theme.ELGreen} edit={edit}/>
                </Right>
            </Wrapper>
            <WrapperRight>
                <Edit onClick={onEditHandler}><Pencil/></Edit>
                <BaseButton text={'Reset Password'} action={() => history.push('/password/reset')}
                            height={25} width={90} fontSize={'1.2'}
                            marginRight={7} visibility={edit ? 'visible' : 'hidden'}/>
                <BaseButton text={'Save'} height={25} width={90} fontSize={'1.2'} marginBottom={7}
                            marginRight={7} visibility={edit ? 'visible' : 'hidden'}/>
            </WrapperRight>
        </Container>
    )
}

export default UserInfoCard

