import BaseInput, {InputTitle} from "../../4_ButtonsInputs/Input";
import BaseButton from "../../4_ButtonsInputs/Button";
import {useForm} from "react-hook-form";
import {FileInput, NewRouteCard, NewRouteForm, NRContent, NRContentLine} from "./styled";
import {ErrorMessage} from "../../13_RouteOptions/styled";


const NRCard = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <NewRouteCard>
            <NewRouteForm onSubmit={handleSubmit(props.submitFunc)}>
                <NRContentLine>
                    <NRContent>
                        <BaseInput var={register} name={'name'} message={"This field is required"}
                                   title={'Route Name'} type={'text'} width={95} marginBottom={10}/>
                        {errors.name ? <ErrorMessage>{errors.name.message}</ErrorMessage> : <ErrorMessage/>}
                    </NRContent>
                    <NRContent>
                        <BaseInput var={register} name={'location'} message={"This field is required"}
                                   title={'Location'} type={'text'} width={95} marginBottom={10}/>
                        {errors.location ? <ErrorMessage>{errors.location.message}</ErrorMessage> : <ErrorMessage/>}
                    </NRContent>
                    <NRContent>
                        <BaseInput var={register} name={'distance'} message={"This field is required"}
                                   title={'Distance (km)'} type={'number'} width={95} marginBottom={10} step={'any'}/>
                        {errors.distance ? <ErrorMessage>{errors.distance.message}</ErrorMessage> : <ErrorMessage/>}
                    </NRContent>
                    <NRContent>
                        <BaseInput var={register} name={'average_grade'} message={"This field is required"}
                                   title={'Average Grade (%)'} type={'number'} width={95} marginBottom={10} step={'any'}/>
                        {errors.average_grade ? <ErrorMessage>{errors.average_grade.message}</ErrorMessage> : <ErrorMessage/>}
                    </NRContent>
                </NRContentLine>
                <NRContentLine>
                    <NRContent>
                        <BaseInput var={register} name={'elevation'} message={"This field is required"}
                                   title={'Elevation'} type={'number'} width={95} marginBottom={10}/>
                        {errors.elevation ? <ErrorMessage>{errors.elevation.message}</ErrorMessage> : <ErrorMessage/>}
                    </NRContent>
                    <NRContent>
                        <BaseInput var={register} name={'steepest_km'} message={"This field is required"}
                                   title={'Steepest KM (%)'} type={'number'} width={95} marginBottom={10} step={'any'}/>
                        {errors.steepest_km ? <ErrorMessage>{errors.steepest_km.message}</ErrorMessage> : <ErrorMessage/>}
                    </NRContent>
                    <NRContent>
                        <InputTitle>Avatar</InputTitle>
                        <FileInput {...register('avatar')} type='file' name='avatar'/>
                    </NRContent>
                    <NRContent>
                        <InputTitle>Banner</InputTitle>
                        <FileInput {...register('banner')} type='file' name='banner' />
                    </NRContent>
                </NRContentLine>
                <BaseButton text={"Submit Route"} type={'submit'} width={15} num={5} denom={1}
                            fontSize={1.4} marginTop={1} marginBottom={1}/>
            </NewRouteForm>
        </NewRouteCard>
    )
}

export default NRCard