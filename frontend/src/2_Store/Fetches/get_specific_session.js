import Axios from "../Axios";


const getSpecificSession = (data) => {
    return {
        type: 'SPECIFIC_SESSION',
        payload: data
    }
}

export const fetchSpecificSession = (id) => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `/session/${id}/`;
    const response = await Axios.get(url, config);
    dispatch(getSpecificSession(response.data));
}