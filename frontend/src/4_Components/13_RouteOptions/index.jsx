import styled from "styled-components";
import Title from "../14_Title";
import OptionField from "./OptionField";
import BaseButton from "../4_ButtonsInputs/Button";

const Container = styled.div`
  margin-top: 2%;
`

const Card = styled.div`
  aspect-ratio: 4.05 / 1;
  width: 87.5vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: ${props => props.theme.ELWhite};
  border: solid 1px ${props => props.theme.BorderColor};
  border-radius: 3px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  button{
    margin-right: 2%;
    margin-bottom: 2%;
  }
`

const Options = styled.div`
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
`

const fieldHeight = 20
const fieldWidth = 70

const RouteOptions = () => {
    return (
        <Container>
            <Title text={'Route Options'}/>
            <Card>
                <Options>
                    <Wrapper>
                        <Title text={'Route'}/>
                        <OptionField options={['test', 'test']} width={fieldWidth} height={fieldHeight}/>
                    </Wrapper>
                    <Wrapper>
                        <Title text={'Wind conditions'}/>
                        <OptionField options={['test', 'test']} width={fieldWidth} height={fieldHeight}/>
                    </Wrapper>
                    <Wrapper>
                        <Title text={'Acceleration'}/>
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
                </Options>
                <BaseButton text={'Calculate'} height={'2.78vw'} width={10} fontSize={'1.2'}/>
            </Card>
        </Container>
    )
}

export default RouteOptions

