import Axios from "../Axios";


const clientList = (data) => {
    return {
        type: 'RECENT_SESSIONS',
        payload: data
    }
}

export const fetchMyClients = () => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = '/sessions/recent/';
    const response = await Axios.get(url, config);
    dispatch(clientList(response.data));
}