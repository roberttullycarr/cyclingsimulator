import Axios from "../Axios";


const clientDetails = (data) => {
    return {
        type: 'CLIENT_DETAILS',
        payload: data
    }
}

export const fetchClientDetails = (id) => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `/coach/client/${id}`;
    const response = await Axios.get(url, config);
    dispatch(clientDetails(response.data));
}