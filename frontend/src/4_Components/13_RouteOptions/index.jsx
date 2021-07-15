import styled from "styled-components";
import Title from "../14_Title";
import OptionField from "./OptionField";
import BaseButton from "../4_ButtonsInputs/Button";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRoutes} from "../../2_Store/Fetches/get_all_routes";
import {fetchSessionResults} from "../../2_Store/Fetches/run_calculations";
import {riderPosition, tirePressure, windConditions} from "../../3_Pages/2_Coach/2_5_Results/simulation_variables";
import {ErrorMessage} from "../15_SignInContainer/styled";

const RouteGenWrap = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Options = styled.div`
  aspect-ratio: 4.05 / 1;
  width: 100%;
  height: auto;
  display: flex;
  background: ${props => props.theme.ELWhite};
  border: solid 1px ${props => props.theme.BorderColor};
  border-radius: 5px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  button{
    margin-right: 2%;
    margin-bottom: 2%;
  }
`

const Form = styled.form`
  width: 100%;
  height: 85.5%;
  align-self: center;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
`

const Wrapper = styled.div`
  padding-left: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .routes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }

  .text-field {
    width: 70%;
    outline: none;
  }

  p{
    :hover {
      cursor: pointer;
    }
  }
`

const fieldHeight = 20
const fieldWidth = 70

const RouteOptions = props => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const dispatch = useDispatch()
    const routes = useSelector(state => state.allRoutes)

    useEffect(() => {
        dispatch(fetchAllRoutes())
    }, [])

    const submitHandler = data => {
        dispatch(fetchSessionResults(props.id, data))
    }

    return (
        <RouteGenWrap>
            <Title text={'Route Options'}/>
            <Options>
                <Form onSubmit={handleSubmit(submitHandler)}>
                    <Wrapper>
                        <Title text={'Routes'}/>
                        {routes.map(route =>
                            <label className="routes">
                                <p>{route.name}</p>
                                <input type='checkbox' placeholder='Route'
                                       value={route.id}
                                       {...register('routes', {required: 'Please select a route'})}/>
                            </label>
                        )}
                    </Wrapper>
                    <Wrapper>
                        <Title text={'Wind condition'}/>
                        <OptionField name={'wind_condition'} options={windConditions} width={fieldWidth}
                                     height={fieldHeight} register={register}/>
                    </Wrapper>
                    <Wrapper>
                        <Title text={'Tire pressure'}/>
                        <OptionField name={'tire_pressure'} options={tirePressure} width={fieldWidth}
                                     height={fieldHeight} register={register}/>
                    </Wrapper>
                    <Wrapper>
                        <Title text={'Bike weight in KGs'}/>
                        <input className='text-field' type='number'
                               {...register('bike_weight', {required: 'Please add a bike weight'})}
                               defaultValue={10}/>
                    </Wrapper>
                    <Wrapper>
                        <Title text={'Rider position'}/>
                        <OptionField name={'rider_position'} options={riderPosition} width={fieldWidth}
                                     height={fieldHeight} register={register}/>
                    </Wrapper>
                    <BaseButton type={'submit'} text={'Calculate'} height={25} width={10} fontSize={'1.2'}/>
                </Form>
            </Options>
            {errors.routes ? <ErrorMessage>{errors.routes.message}</ErrorMessage> : <ErrorMessage/>}
            {errors.bike_weight ? <ErrorMessage>{errors.bike_weight.message}</ErrorMessage> : <ErrorMessage/>}
        </RouteGenWrap>
    )
}

export default RouteOptions

