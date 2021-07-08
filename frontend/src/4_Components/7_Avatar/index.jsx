import React from 'react'
import styled from 'styled-components';
import { useHistory, useLocation } from "react-router-dom";
import avatar from "../../5_Assets/PNG/default_avatar.png"


const AvatarRing = styled.div`
aspect-ratio: 1 / 1;
width: ${props => `${props.width}%`};
height: auto;
margin-left: ${props => props.marginLeft || "4%"};
margin-right: ${props => props.marginRight || "4%"};
margin-top: ${props => `${props.marginTop}%` || "0%"};
margin-bottom: ${props => props.marginBottom || "0%"};
border: 1px solid ${props => props.color || '#E5E5E5'};
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background: transparent;
`

export const BaseAvatar = styled.img`
    aspect-ratio: 1 / 1;
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
                    marginRight={props.marginRight} marginTop={props.marginTop} marginBottom={props.marginBottom}
                    color={props.color}>
            <BaseAvatar  src={props.user ? props.user : avatar}
                     alt={props.alt}
                    onClick={() => location.pathname !== `/${props.user_id}` ?
                        history.push(`/${props.user_id}`) : null}/>
        </AvatarRing>
    )
};

export default Avatar;