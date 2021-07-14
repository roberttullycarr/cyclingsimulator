import Axios from "../Axios";


const getCalculations = (data) => {
    return {
        type: 'SESSION_RESULTS',
        payload: data
    }
}

export const fetchSessionResults = (id, inputs) => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `/session/simulation/${id}/`;
    const response = await Axios.patch(url, inputs, config);
    dispatch(getCalculations(response.data));
}