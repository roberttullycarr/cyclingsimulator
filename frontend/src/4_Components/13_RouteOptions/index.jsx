import styled from "styled-components";
import { ReactComponent as SearchIcon } from '../../5_Assets/SVG/40_search.svg'
import Title from "../14_Title";

const Container = styled.div`
  margin-top: 2%;
`

const Card = styled.div`
  aspect-ratio: 4.05 / 1;
  width: 87.5vw;
  height: auto;
  display: flex;
  background: ${props => props.theme.ELWhite};
  border: solid 1px ${props => props.theme.BorderColor};
  border-radius: 3px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
`

const Options = styled.div`
  width: 100%;
  //width: 87.2%;
  height: 55%;
  align-self: center;
`

const RouteOptions = () => {
    return (
        <Container>
            <Title text={'Route Options'}/>
            <Card>
                <Options>

                </Options>
            </Card>
        </Container>
    )
}

export default RouteOptions

