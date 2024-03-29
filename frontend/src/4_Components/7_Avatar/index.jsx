import React from 'react'
import styled from 'styled-components';
import { useHistory, useLocation } from "react-router-dom";
import avatar from "../../5_Assets/PNG/default_avatar.png"
import { ReactComponent as Camera } from "../../5_Assets/SVG/45_camera.svg";


const AvatarRing = styled.div`
  position: relative;
aspect-ratio: 1 / 1;
width: ${props => `${props['width']}%`};
height: auto;
margin-left: ${props => props.marginLeft || "4%"};
margin-right: ${props => props.marginRight || "4%"};
margin-top: ${props => props.marginTop || "0%"};
margin-bottom: ${props => props.marginBottom || "0%"};
border: 2px solid ${props => props.color || '#E5E5E5'};
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
`

const CameraButtonInput = styled.label`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 60%;
  background: ${props => props.theme.MBLinkColor};
  border-radius: 50%;
    :active {
        transform: translateY(2px);
    }
`

const AvatarInput = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`

const CameraButton = styled(Camera)`
  z-index: 1;
  fill: white;
  height: 50%;
`


const Avatar = (props) => {
    const history = useHistory();
    const location = useLocation();

    return (
        <AvatarRing height={props.height} width={props.width} marginLeft={props.marginLeft}
                    marginRight={props.marginRight} marginTop={props.marginTop} marginBottom={props.marginBottom}
                    color={props.color}>
            {props.edit ? <CameraButtonInput>
                            <CameraButton />
                            <AvatarInput type={'file'} {...props.var(props.name)}/>
                          </CameraButtonInput> : null}
            <BaseAvatar  src={props.user ? props.user : avatar}
                     alt={props.alt}/>
        </AvatarRing>
    )
};

export default Avatar;