import React from 'react'
import styled from 'styled-components';
import { useHistory, useLocation } from "react-router-dom";
import avatar from "../../5_Assets/PNG/default_avatar.png"


const AvatarRing = styled.div`
height: ${props => `${props.height}px` || "50px"};
width: ${props => `${props.height}px` || "50px"};
margin-left: ${props => props.marginLeft || "4%"};
margin-right: ${props => props.marginRight || "4%"};
border: 1px solid ${props => props.color || '#FFFFFF'};
border-radius: ${props => `${props.height / 2}px` || "25px"};
display: flex;
justify-content: center;
align-items: center;
`

export const BaseAvatar = styled.img`
    height: 90%;
    width: 90%;
    object-fit: cover;
    border-radius: 50%;

    :hover {
        cursor: pointer;
    }

    :active {
        transform: translateY(2px);
    }
`


const Avatar = (props) => {
    const history = useHistory();
    const location = useLocation();

    return (
        <AvatarRing height={props.height} width={props.width} marginLeft={props.marginLeft}
                    marginRight={props.marginRight} color={props.color}>
            <BaseAvatar  src={props.user ? props.user : avatar}
                     alt={props.alt}
                    onClick={() => location.pathname !== `/${props.user_id}` ?
                        history.push(`/${props.user_id}`) : null}/>
        </AvatarRing>
    )
};

export default Avatar;