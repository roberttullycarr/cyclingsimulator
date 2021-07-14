import Axios from "../Axios";


const allRoutes = (data) => {
    return {
        type: 'ALL_ROUTES',
        payload: data
    }
}

export const fetchAllRoutes = () => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `/routes/`;
    const response = await Axios.get(url, config);
    dispatch(allRoutes(response.data));
}