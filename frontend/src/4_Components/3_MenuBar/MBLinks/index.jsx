import styled from "styled-components";
import {useHistory} from "react-router-dom";

const MBLinks = styled.button`
width: 100%;
height: 25%;
display: flex;
justify-content: center;
align-items: center;
border: none;
background: none;
display: ${props => props.display || 'normal'};

    :hover {
    cursor: pointer;
    }
`

const Icon = styled.img`
width: 50%;
`

const MBLink = (props) => {
    const history = useHistory();
    return (
        <MBLinks display={props.display} onClick={() => history.push(props.url)}>
            <Icon src={props.icon} />
        </MBLinks>
    )
}

export default MBLink