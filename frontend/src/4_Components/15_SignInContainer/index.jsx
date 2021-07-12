import styled from "styled-components"
import {useLocation} from "react-router-dom";
import BaseInput from "../4_ButtonsInputs/Input";
import BaseButton from "../4_ButtonsInputs/Button";

const SIUContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  aspect-ratio: 9 / 8;
  background: ${props => props.theme.ELWhite};
  border: 1px solid #BDBDBD;
  border-radius: 5px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
`

const ContainerTitle = styled.h1`
color: ${props => props.theme.ELGreen};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.8vw;
  margin-top: 7%;
`

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
`

const SignInUpContainer = () => {
    const location = useLocation();

    return (
        <SIUContainerMain>
            <ContainerTitle>{location.pathname.includes('signin') ? 'Sign In' : 'Sign Up'}</ContainerTitle>
            <InputWrapper>
                <BaseInput title={'Email'} width={65} marginTop={5} marginBottom={6}/>
                {location.pathname.includes('signin') ? <BaseInput title={'Password'} width={65} marginBottom={5}/> : null}
                <BaseButton text={location.pathname.includes('signin') ? 'Sign In' : 'Sign Up'} width={28} num={5} denom={2} fontSize={1.1}/>
            </InputWrapper>
        </SIUContainerMain>
    )
}

export default SignInUpContainer