import Axios from "../Axios";


const recentSessions = (data) => {
    return {
        type: 'RECENT_SESSIONS',
        payload: data
    }
}

export const fetchRecentSessions = () => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = '/sessions/recent/';
    const response = await Axios.get(url, config);
    dispatch(recentSessions(response.data));
}