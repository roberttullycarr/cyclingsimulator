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
const CleintText = styled.p`
    font-size: 1.2vw;
    font-family: roboto,sans-serif;
`;
const CleintSpan = styled.p`
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
            <CleintText>{props.email ? props.email : "user@email.com"}</CleintText>
            <CleintText>23 years old</CleintText>
            <BirthdayContent className="marginBottom marginTop">
                <CleintSpan>
                    <Bold>Birthday:</Bold>
                </CleintSpan>
                <CleintSpan>
                    {props.date ? props.date : "Month Day, Year"}
                </CleintSpan>
            </BirthdayContent>
            
            <ClientLine/>

            <CleintSpan className="marginTop">
                <Bold>Last session</Bold>
            </CleintSpan>
            <ContainerLastSession>
                <LastSessionItem>
                    <CleintText>{props.power ? props.power : "0 W"}</CleintText>
                    <CleintText><Bold className="grey">Power</Bold></CleintText>
                </LastSessionItem>
                <LastSessionItem> 
                    <CleintText>{props.heart_rate ? props.heart_rate : "0 BPM"}</CleintText>
                    <CleintText><Bold className="grey">Heart Rate</Bold></CleintText>
                </LastSessionItem>
                <LastSessionItem>
                    <CleintText>{props.weight ? props.weight : "0KG"} </CleintText>
                    <CleintText><Bold className="grey">Weight</Bold></CleintText>
                </LastSessionItem>
            </ContainerLastSession>

            <CleintText>{props.date ? props.date : "Month Day, Year"} {props.hour ? props.hour : "9:30 AM"}</CleintText>

            <BaseButton text={'Details'} width={75} height={"10%"} marginLeft={"auto"} marginRight={"auto"} marginTop={"3vw"} marginBottom={"0"} fontSize={"1.4vw"}/>
        </ClientCardMain>
    )
}

export default ClientCard