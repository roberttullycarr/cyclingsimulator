import Axios from "../Axios";


const SessionsList = (data) => {
    return {
        type: 'ALL_SESSIONS',
        payload: data
    }
}

export const fetchAllSessions = (keyword, offset) => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `/sessions/?search=${keyword}&limit=10&offset=${offset}`;
    const response = await Axios.get(url, config);
    console.log(response)
    dispatch(SessionsList(response.data.results));
}