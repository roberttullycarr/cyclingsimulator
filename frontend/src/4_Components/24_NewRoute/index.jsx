import BaseButton from "../4_ButtonsInputs/Button";
import {useState} from "react";
import {useDispatch} from "react-redux";
import NRCard from "./NRCard";
import styled from "styled-components"
import Axios from "../../2_Store/Axios";
import {useHistory} from "react-router-dom";

const NewRouteMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.theme.CardWidthPercent};
  margin-bottom: 2vw;
`


const NewRoute = () => {
    const [expand, setExpand] = useState('false');
    const history = useHistory();
    const dispatch = useDispatch();

    const clickHandler = () => {expand === 'false' ? setExpand('true') : setExpand('false')};

    const createNewRoute = async (data) => {
        const url = 'routes/new/';
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        let newForm = new FormData()
        if (data.avatar.length > 0) {
            newForm.append('avatar', data.avatar[0]);
        }
        if (data.banner.length > 0) {
            newForm.append('banner', data.banner[0]);
        }
        newForm.append('name', data.name);
        newForm.append('location', data.location);
        newForm.append('distance', data.distance);
        newForm.append('elevation', data.elevation);
        newForm.append('steepest_km', data.steepest_km);
        newForm.append('average_grade', data.average_grade);

        const response = await Axios.post(url, newForm, config);
        dispatch({"type": 'NEW_ROUTE', "payload": response.data});
        history.push(`routes/${response.data.id}`);

        clickHandler();
    };

    return (
        <NewRouteMain>
            <BaseButton action={clickHandler} text={"Create New Route"} width={15} num={5} denom={1} fontSize={1.4} />
            {expand === "true" ? <NRCard submitFunc={createNewRoute}/> : null}
        </NewRouteMain>
    )
}

export default NewRoute