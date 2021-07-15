import styled from "styled-components";
import Avatar from "../7_Avatar";
import BaseButton from "../4_ButtonsInputs/Button";
import {useHistory} from "react-router";

export const ClientCardMain = styled.div`
  width: 82%;
  height: 16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.ELWhite};
  border: 1px solid #BDBDBD;
  border-radius: 5px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  text-align: center;
  
  :hover {
    cursor: pointer;
  }
`
const ClientName = styled.h2`
  font-size: 1.3vw;
  font-family: roboto,sans-serif;
  font-weight: 700;
  padding: 0 2%;
  color: ${props => props.theme.ELBlue};
  height: 15%;
`;
const ClientText = styled.p`
  font-size: 1.2vw;
  font-family: roboto,sans-serif;
`;

const ClientSpan = styled.p`
  font-size: 1vw;
  font-family: roboto,sans-serif;
  &.marginTop{
    margin-top: 6%;
  }
  &.marginBottom{
    margin-bottom: 6%;
  }
`;
const Bold = styled.b`
  font-size: 1vw;
  font-weight:700;
  font-family: roboto,sans-serif;
  &.grey{
    color:#bfbfbf;
  }
`;


const BirthdayContent = styled.div`
  font-size: 1.2vw;
  height: 9%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: roboto,sans-serif;
  &.marginTop{
    margin-top: 4%;
  }
  &.marginBottom{
    margin-bottom: 0;
  }
`;


const ClientCard = (props) => {
    // destructuring props
    const { id, full_name, first_name, last_name, email, location, avatar, number_of_sessions } = props.client
    const history = useHistory();

    const goToClientProfile = () => {
        history.push(`/coach/athlete/${id}`)
    }
    return (
        <ClientCardMain onClick={() => history.push(`/coach/athlete/${id}`)}>
            <Avatar width={35} marginLeft={"auto"} marginRight={"auto"} marginBottom={"5%"} marginTop={"8%"} user={avatar}/>
            <ClientName>{full_name ? full_name : `${first_name} ${last_name}`}</ClientName>
            <BirthdayContent className="marginBottom marginTop">
                <ClientSpan>
                    <Bold>sessions</Bold>
                </ClientSpan>
                <ClientSpan>
                    {number_of_sessions}
                </ClientSpan>
            </BirthdayContent>

            <BaseButton action={goToClientProfile} text={'Details'} width={40} height={12} fontSize={1}
                        marginLeft={"auto"} marginRight={"auto"} marginTop={14} marginBottom={"0"} />
        </ClientCardMain>
    )
}

export default ClientCard