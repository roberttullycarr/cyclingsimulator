import styled from "styled-components";
import Title from "../14_Title";
import OptionField from "./OptionField";
import BaseButton from "../4_ButtonsInputs/Button";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRoutes} from "../../2_Store/Fetches/get_all_routes";
import {fetchSessionResults} from "../../2_Store/Fetches/run_calculations";

const Form = styled.div`
  aspect-ratio: 4.05 / 1;
  width: 87.5vw;
  height: auto;
  display: flex;
  background: ${props => props.theme.ELWhite};
  border: solid 1px ${props => props.theme.BorderColor};
  border-radius: 3px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  button{
    margin-right: 2%;
    margin-bottom: 2%;
  }
`

const Options = styled.form`
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
        <div>
            <Title text={'Route Options'}/>
            <Form>
                <Options onSubmit={handleSubmit(submitHandler)}>
                    <Wrapper>
                        <Title text={'Routes'}/>
                        {routes.map(route =>
                            <label className="routes">
                                <p>{route.name}</p>
                                <input type='checkbox' placeholder='Route'
                                       value={route.id} {...register('routes')}/>
                            </label>
                        )}
                    </Wrapper>
                    <Wrapper>
                        <Title text={'Wind condition'}/>
                        <OptionField options={['test', 'test']} width={fieldWidth} height={fieldHeight}/>
                    </Wrapper>
                    <Wrapper>
                        <Title text={'Bike type'}/>
                        <OptionField options={['test', 'test']} width={fieldWidth} height={fieldHeight}/>
                    </Wrapper>
                    <Wrapper>
                        <Title text={'Bike weight'}/>
                        <OptionField options={['test', 'test']} width={fieldWidth} height={fieldHeight}/>
                    </Wrapper>
                    <Wrapper>
                        <Title text={'Tire pressure'}/>
                        <OptionField options={['test', 'test']} width={fieldWidth} height={fieldHeight}/>
                    </Wrapper>
                    <Wrapper>
                        <Title text={'Rider position'}/>
                        <OptionField options={['test', 'test']} width={fieldWidth} height={fieldHeight}/>
                    </Wrapper>
                    <BaseButton type={'submit'} text={'Calculate'} height={'2.78vw'} width={10} fontSize={'1.2'}/>
                </Options>
            </Form>
        </div>
    )
}

export default RouteOptions

