import Axios from "../Axios";


const ytdSessions = (data) => {
    return {
        type: 'YEAR_TO_DATE_SESSIONS',
        payload: data
    }
}

export const fetchYearToDateSessions = () => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `/sessions/statistics/`;
    const response = await Axios.get(url, config);
    dispatch(ytdSessions(response.data));
}