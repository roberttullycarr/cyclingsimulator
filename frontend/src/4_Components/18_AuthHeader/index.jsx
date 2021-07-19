import styled from 'styled-components'
import ELLogo from "../../5_Assets/PNG/energylab.png"

const AuthHeaderMain = styled.div`
  width: 100%;
  background: ${props => props.theme.ELWhite};
  height: 5.395vw;
  display: flex;
  align-items: center;
`

const HeaderLogo = styled.img`
height: 75%;
  margin-left: 1.5%;
`

const AppTitle = styled.h1`
color: rgb(1 108 31 / 76%);
  margin-left: 2%;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.8vw;
`

const AuthHeader = () => {
    return (
        <AuthHeaderMain>
            <HeaderLogo src={ELLogo}/>
            <AppTitle>Cycling Sessions</AppTitle>
        </AuthHeaderMain>
    )
}

export default AuthHeader