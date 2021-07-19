import {Admin} from "../styled";
import React from "react";
import {InputTitle} from "../../4_ButtonsInputs/Input";
import styled from "styled-components";

const CheckWrap = styled.div`
display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: .5vw;
`

const CheckField = (props) => {
    return (
        <>
        {props.edit ?  <CheckWrap>
            <input type={'checkbox'} {...props.var('is_superuser')} />
            <InputTitle>is admin</InputTitle>
        </CheckWrap> : props.user['is_superuser'] ? <Admin>Admin</Admin> : <Admin>Coach</Admin>
        }
        </>
    )
}

export default CheckField