import Axios from "../Axios";


const loggedInUser = (data) => {
    return {
        type: 'MY_INFO',
        payload: data
    }
}

export const fetchLoggedInUserData = () => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = '/me/';
    const response = await Axios.get(url, config);
    dispatch(loggedInUser(response.data));
}