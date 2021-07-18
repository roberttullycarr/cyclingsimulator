import {Main} from "../../../4_Components/1_Main";
import SignInUpContainer from "../../../4_Components/15_SignInContainer";
import {AuthBody} from "./styled";
import AuthHeader from "../../../4_Components/18_AuthHeader";


const SignIn = () => {
    return (
        <Main>
            <AuthHeader/>
            <AuthBody>
                <SignInUpContainer />
            </AuthBody>
        </Main>
    )
}

export default SignIn
