import Axios from "../Axios";


const clientList = (data) => {
    return {
        type: 'MY_CLIENTS',
        payload: data
    }
}

export const fetchMyClients = (keyword) => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `/coach/clients/?search=${keyword}`;
    const response = await Axios.get(url, config);
    dispatch(clientList(response.data));
}