import {Main} from "../../../4_Components/1_Main";
import BaseInput from "../../../4_Components/4_ButtonsInputs/Input";
import AuthHeader from "../../../4_Components/18_AuthHeader";
import styled from "styled-components";
import stelvio from "../../../5_Assets/PNG/stelvio_06_hairpin.png"

const AuthBody = styled.div`
  min-height: calc(100vh - 5.395vw);
  width: 100%;
  height: 100%;
  position: relative;
  background: url(${stelvio}) no-repeat bottom;
  background-size: cover;
`



const SignIn = () => {
    return (
        <Main>
            <AuthHeader/>
            <AuthBody>
            </AuthBody>
        </Main>
    )
}

export default SignIn
