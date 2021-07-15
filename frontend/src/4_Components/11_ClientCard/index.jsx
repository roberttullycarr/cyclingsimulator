import styled from "styled-components";
import Avatar from "../7_Avatar";
import BaseButton from "../4_ButtonsInputs/Button";
import {useHistory} from "react-router";

export const ClientCardMain = styled.div`
  width: 80%;
  height: 28vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.ELWhite};
  border: 1px solid #BDBDBD;
  border-radius: 5px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  text-align: center;
`
const ClientName = styled.h2`
  font-size: 2vw;
  font-family: roboto,sans-serif;
  font-weight: 700;
  color: ${props => props.theme.ELBlue};
`;
const ClientText = styled.p`
  font-size: 1.2vw;
  font-family: roboto,sans-serif;
`;

const ClientSpan = styled.p`
  font-size: 1.2vw;
  font-family: roboto,sans-serif;
  &.marginTop{
    margin-top: 6%;
  }
  &.marginBottom{
    margin-bottom: 6%;
  }
`;
const Bold = styled.b`
  font-size: 1.2vw;
  font-weight:700;
  font-family: roboto,sans-serif;
  &.grey{
    color:#bfbfbf;
  }
`;
const ClientLine = styled.hr`
  color: #bfbfbf;
  width: 50%;
`;
const ContainerLastSession = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 70%;
  justify-content: space-between;
  margin-top:4%;
  margin-bottom: 5%;
`;
const LastSessionItem = styled.div`
  font-size: 1.2vw;
  font-family: roboto,sans-serif;
`;
const BirthdayContent = styled.div`
  font-size: 1.2vw;
  height: 9%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: roboto,sans-serif;
  &.marginTop{
    margin-top: 2%;
  }
  &.marginBottom{
    margin-bottom: 2%;
  }
`;


const ClientCard = (props) => {
    // destructuring props
    const { id, full_name, email, location, avatar, number_of_sessions } = props.client
    const history = useHistory();

    const goToClientProfile = () => {
        history.push(`/coach/athlete/${id}`)
    }
    return (
        <ClientCardMain>
            <Avatar width={30} marginLeft={"auto"} marginRight={"auto"} marginBottom={"5%"} marginTop={"8%"} user={avatar}/>
            <ClientName>{full_name ? full_name : "Client Name"}</ClientName>
            <ClientLine/>
            <BirthdayContent className="marginBottom marginTop">
                <ClientSpan>
                    <Bold>sessions</Bold>
                </ClientSpan>
                <ClientSpan>
                    {number_of_sessions}
                </ClientSpan>
            </BirthdayContent>

            <BaseButton action={goToClientProfile} text={'Details'} width={50} height={10} fontSize={1.4}
                        marginLeft={"auto"} marginRight={"auto"} marginTop={3} marginBottom={"0"} />
        </ClientCardMain>
    )
}

export default ClientCard