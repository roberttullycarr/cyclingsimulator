import styled from "styled-components";
import Avatar from "../7_Avatar";
import BaseButton from "../4_ButtonsInputs/Button";

const ClientCardMain = styled.div`
width: 90%;
height: 38vw;
background: ${props => props.theme.ELWhite};
border: 1px solid #BDBDBD;
border-radius: 5px;
box-shadow: ${props => props.theme.BoxShadowWidget};
text-align: center;
padding: 2vw 5vw;
@media (min-width: 1440px) {
    padding:1.5vw 4vw;
}
`
const ClientName = styled.h2`
    font-size: 2vw;
    font-family: roboto,sans-serif;
    font-weight: 400;
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
`;
const ContainerLastSession = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-top:6%;
    margin-bottom:6%;
`;
const LastSessionItem = styled.div`
    font-size: 1.2vw;
    font-family: roboto,sans-serif;
`;
const BirthdayContent = styled.div`
    font-size: 1.2vw;
    font-family: roboto,sans-serif;
    &.marginTop{
        margin-top: 6%;
    }
    &.marginBottom{
        margin-bottom: 6%;
    }
`;


const ClientCard = (props) => {
    return (
        <ClientCardMain>
            <Avatar width={48} marginLeft={"auto"} marginRight={"auto"} marginBottom={"5%"}/>
            <ClientName>{props.username ? props.username : "Albert Lawrence"}</ClientName>
            <ClientText>{props.email ? props.email : "user@email.com"}</ClientText>
            <ClientText>23 years old</ClientText>
            <BirthdayContent className="marginBottom marginTop">
                <ClientSpan>
                    <Bold>Birthday:</Bold>
                </ClientSpan>
                <ClientSpan>
                    {props.date ? props.date : "Month Day, Year"}
                </ClientSpan>
            </BirthdayContent>
            
            <ClientLine/>

            <ClientSpan className="marginTop">
                <Bold>Last session</Bold>
            </ClientSpan>
            <ContainerLastSession>
                <LastSessionItem>
                    <ClientText>{props.power ? props.power : "0 W"}</ClientText>
                    <ClientText><Bold className="grey">Power</Bold></ClientText>
                </LastSessionItem>
                <LastSessionItem> 
                    <ClientText>{props.heart_rate ? props.heart_rate : "0 BPM"}</ClientText>
                    <ClientText><Bold className="grey">Heart Rate</Bold></ClientText>
                </LastSessionItem>
                <LastSessionItem>
                    <ClientText>{props.weight ? props.weight : "0KG"} </ClientText>
                    <ClientText><Bold className="grey">Weight</Bold></ClientText>
                </LastSessionItem>
            </ContainerLastSession>

            <ClientText>{props.date ? props.date : "Month Day, Year"} {props.hour ? props.hour : "9:30 AM"}</ClientText>

            <BaseButton text={'Details'} width={75} height={"10%"} fontSize={1.4} marginLeft={"auto"}
                        marginRight={"auto"} marginTop={"3vw"} marginBottom={"0"} />
        </ClientCardMain>
    )
}

export default ClientCard