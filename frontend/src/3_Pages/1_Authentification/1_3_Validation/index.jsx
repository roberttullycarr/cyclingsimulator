import {Main} from "../../../4_Components/1_Main";
import AuthHeader from "../../../4_Components/18_AuthHeader";
import {AuthBody} from "../1_2_SignIn/styled";
import PasswordValidate from "../../../4_Components/16_PasswordValidate";



const Validation = () => {
    return (
        <Main>
            <AuthHeader/>
            <AuthBody>
                <PasswordValidate/>
            </AuthBody>
        </Main>
    )
}

export default Validation
