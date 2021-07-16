import Axios from "../Axios";


const SessionsList = (data) => {
    return {
        type: 'ALL_SESSIONS',
        payload: data
    }
}

export const fetchAllSessions = (keyword) => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `/sessions/?search=${keyword}`;
    const response = await Axios.get(url, config);
    console.log(response)
    dispatch(SessionsList(response.data));
}