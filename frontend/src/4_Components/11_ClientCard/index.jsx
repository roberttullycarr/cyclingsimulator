import styled from "styled-components";
import BaseButton from "../4_Buttons";

const ClientCardMain = styled.div`
width: 90%;
height: 32vw;
background: ${props => props.theme.ELWhite};
border: 1px solid #BDBDBD;
border-radius: 5px;
box-shadow: ${props => props.theme.BoxShadowWidget};
`

const ClientCard = () => {
    return (
        <ClientCardMain>
        </ClientCardMain>
    )
}

export default ClientCard