import Axios from "../Axios";


const allCoaches = (data) => {
    return {
        type: 'ALL_COACHES',
        payload: data
    }
}

export const fetchAllCoaches = () => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `/coaches/`;
    const response = await Axios.get(url, config);
    dispatch(allCoaches(response.data));
}