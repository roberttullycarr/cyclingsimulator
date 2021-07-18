import Title from "../14_Title";
import OptionField from "./OptionField";
import BaseButton from "../4_ButtonsInputs/Button";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRoutes} from "../../2_Store/Fetches/get_all_routes";
import {fetchSessionResults} from "../../2_Store/Fetches/run_calculations";
import {riderPosition, tirePressure, windConditions} from "../../3_Pages/2_Coach/2_5_Results/simulation_variables";
import BaseInput from "../4_ButtonsInputs/Input";
import {
    ButtonWrapper,
    ErrorMessage,
    Form,
    FormWrapper,
    InnerWrapper,
    RoutesInput,
    RouteWrapper,
    Wrapper
} from "./styled";
import {SectionWrapper} from "../1_Main";


const fieldHeight = 20
const fieldWidth = 80
const optionMarginTop = 3
const optionMarginBottom = 5

const RouteOptions = props => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const dispatch = useDispatch()
    const routes = useSelector(state => state.allRoutes)

    useEffect(() => {
        dispatch(fetchAllRoutes())
    }, [dispatch])

    const submitHandler = data => {
        dispatch(fetchSessionResults(props.id, data))
    }

    return (
        <SectionWrapper>
            <Title text={'Route Options'}/>
            <Form onSubmit={handleSubmit(submitHandler)}>
                <FormWrapper>
                    <RouteWrapper>
                        <Title text={'Routes'}/>
                        <RoutesInput>
                            {routes.map(route =>
                                <label className="routes">
                                    <input type='checkbox' placeholder='Route'
                                           value={route.id}
                                           {...register('routes', {required: 'Please select a route'})}/>
                                    <p>{route.name}</p>
                                </label>
                            )}
                        </RoutesInput>
                        {errors.routes ? <ErrorMessage>{errors.routes.message}</ErrorMessage> : <ErrorMessage/>}
                    </RouteWrapper>
                    <Wrapper>
                        <InnerWrapper>
                            <Title text={'Wind condition'}/>
                            <OptionField name={'wind_condition'} options={windConditions} width={fieldWidth}
                                         height={fieldHeight} register={register} marginTop={optionMarginTop}
                                         marginBottom={optionMarginBottom}/>
                        </InnerWrapper>
                        <InnerWrapper>
                            <Title text={'Tire pressure'}/>
                            <OptionField name={'tire_pressure'} options={tirePressure} width={fieldWidth}
                                         height={fieldHeight} register={register} marginTop={optionMarginTop}
                                         marginBottom={optionMarginBottom}/>
                        </InnerWrapper>
                    </Wrapper>
                    <Wrapper>
                        <InnerWrapper>
                            <Title text={'Bike weight in KGs'}/>
                            <BaseInput type={'number'} width={fieldWidth} height={fieldHeight} marginTop={optionMarginTop}
                                       var={register} name={'bike_weight'} message={'Please add a bike weight'}
                                       marginBottom={optionMarginBottom} value={10}/>
                            {errors.bike_weight ? <ErrorMessage>{errors.bike_weight.message}</ErrorMessage> : <ErrorMessage/>}
                        </InnerWrapper>
                        <InnerWrapper>
                            <Title text={'Rider position'}/>
                            <OptionField name={'rider_position'} options={riderPosition} width={fieldWidth}
                                         height={fieldHeight} register={register} marginTop={optionMarginTop}
                                         marginBottom={optionMarginBottom}/>
                        </InnerWrapper>
                    </Wrapper>
                    <ButtonWrapper>
                        <BaseButton type={'submit'} text={'Calculate'} height={15} width={50} fontSize={'1.2'}
                                    marginBottom={27} marginRight={40} action={() => props.loading(true)}/>
                    </ButtonWrapper>
                </FormWrapper>
            </Form>
        </SectionWrapper>
    )
}

export default RouteOptions

