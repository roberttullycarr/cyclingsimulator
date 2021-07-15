import BaseInput, {InputTitle} from "../../4_ButtonsInputs/Input";
import BaseButton from "../../4_ButtonsInputs/Button";
import {useForm} from "react-hook-form";
import {FileInput, NewRouteCard, NewRouteForm, NRContent, NRContentLine} from "./styled";


const NRCard = (props) => {
    const { register, handleSubmit } = useForm();

    return (
        <NewRouteCard>
                <NewRouteForm onSubmit={handleSubmit(props.submitFunc)}>
                    <NRContentLine>
                        <NRContent>
                            <BaseInput var={register} name={'name'} title={'Route Name'} type={'text'} width={95} marginBottom={10}/>
                        </NRContent>
                        <NRContent>
                            <BaseInput var={register} name={'location'} title={'Location'} type={'text'} width={95} marginBottom={10}/>
                        </NRContent>
                        <NRContent>
                            <BaseInput var={register} name={'distance'} title={'Distance (km)'} type={'float'} width={95} marginBottom={10}/>
                        </NRContent>
                        <NRContent>
                            <BaseInput var={register} name={'average_grade'} title={'Average Grade (%)'} type={'float'} width={95} marginBottom={10}/>
                        </NRContent>
                    </NRContentLine>
                    <NRContentLine>
                        <NRContent>
                            <BaseInput var={register} name={'elevation'} title={'Elevation'} type={'number'} width={95} marginBottom={10}/>
                        </NRContent>
                        <NRContent>
                            <BaseInput var={register} name={'steepest_km'} title={'Steepest KM (%)'} type={'float'} width={95} marginBottom={10}/>
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