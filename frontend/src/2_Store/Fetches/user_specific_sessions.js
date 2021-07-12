import Axios from "../Axios";


const clientRecentSessions = (data) => {
    return {
        type: 'CLIENT_RECENT_SESSIONS',
        payload: data
    }
}

export const fetchClientRecentSessions = (id) => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `sessions/recent/${id}/`;
    const response = await Axios.get(url, config);
    dispatch(clientRecentSessions(response.data));
}