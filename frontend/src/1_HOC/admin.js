import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useHistory } from "react-router";

export const withAdminRights = WrapperComponent => () => {

    const token = useSelector(state => state.token);
    const logedInUser = useSelector(state => state.myInfo)
    const history = useHistory();

    useEffect(() => {
        if(!token)history.push("/signin")
        if(!logedInUser['is_superuser'])history.push('/clients')

    }, [token, history, logedInUser])

    return <WrapperComponent />
}
