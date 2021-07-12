import {Main} from "../../../4_Components/1_Main";
import AuthHeader from "../../../4_Components/18_AuthHeader";
import SignInUpContainer from "../../../4_Components/15_SignInContainer";
import {AuthBody} from "../1_2_SignIn";


const SignUp = () => {
    return (
        <Main>
            <AuthHeader/>
            <AuthBody>
                <SignInUpContainer/>
            </AuthBody>
        </Main>
    )
}

export default SignUp
