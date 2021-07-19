import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useHistory } from "react-router";

export const withAdminRights = WrapperComponent => () => {

    const token = useSelector(state => state.token);
    const loggedInUser = useSelector(state => state.myInfo)
    const history = useHistory();

    useEffect(() => {
        if( !token)history.push("/signin" )
        if( !loggedInUser['is_superuser'] && Object.keys(loggedInUser).length )history.push('/clients')

    }, [token, history, loggedInUser])

    return <WrapperComponent />
}
