import Avatar from "../7_Avatar";
import BaseButton from "../4_ButtonsInputs/Button";
import {useHistory} from "react-router";
import {BirthdayContent, Bold, ClientCardMain, ClientName, ClientSpan} from "./styled";



const ClientCard = (props) => {
    // destructuring props
    const { id, full_name, first_name, last_name, avatar, number_of_sessions } = props.client
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