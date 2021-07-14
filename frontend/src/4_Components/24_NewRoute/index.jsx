import BaseButton from "../4_ButtonsInputs/Button";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import NRCard from "./NRCard";
import styled from "styled-components"
import Axios from "../../2_Store/Axios";
import SessionCard from "../5_SessionCard";

const NewRouteMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin-bottom: 2vw;
`


const NewRoute = () => {
    const [expand, setExpand] = useState('false');
    const [route, setRoute] = useState('false');
    const dispatch = useDispatch();

    const clickHandler = () => {expand === 'false' ? setExpand('true') : setExpand('false')};

    const createNewRoute = async (data) => {
        console.log(data);
        const url = 'routes/new/';
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        try {
            const response = await Axios.post(url, data, config);
            if (response.status === 201) {
                const action = {
                    "type": 'NEW_ROUTE',
                    "payload": response.data,
                };
                    dispatch(action);
                    clickHandler();
            }
        } catch(err) {
            if (err.response.status === 400 || err.response.status === 401) {
                console.log(err.response.status);
            }
        }
    };

    return (
        <NewRouteMain>
            <BaseButton action={clickHandler} text={"Create New Route"} width={15} num={5} denom={1} fontSize={1.4} />
            {expand === "true" ? route === 'false' ? <NRCard submitFunc={createNewRoute}/> : <SessionCard/> : null}
        </NewRouteMain>
    )
}

export default NewRoute