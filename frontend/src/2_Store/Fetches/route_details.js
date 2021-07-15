import Axios from "../Axios";


const getSpecificRoute = (data) => {
    return {
        type: 'SPECIFIC_ROUTE',
        payload: data
    }
}

export const fetchSpecificRoute = (id) => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `/routes/${id}/`;
    const response = await Axios.get(url, config);
    dispatch(getSpecificRoute(response.data));
}