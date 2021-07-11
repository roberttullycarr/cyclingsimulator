import Axios from "../Axios";


const routesList = (data) => {
    return {
        type: 'ROUTES',
        payload: data
    }
}

export const fetchAllRoutes = (keyword) => async dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    };
    const url = `/routes/?search=${keyword}`;
    const response = await Axios.get(url, config);
    dispatch(routesList(response.data));
}