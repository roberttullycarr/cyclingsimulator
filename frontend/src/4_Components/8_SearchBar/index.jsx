import styled from "styled-components";
import { ReactComponent as SearchIcon } from '../../5_Assets/SVG/40_search.svg'

const Container = styled.div`
  margin-top: 2%;
  aspect-ratio: 25 / 1;
  width: 87.5vw;
  height: auto;
  display: flex;
  background: ${props => props.theme.ELWhite};
  border: solid 1px ${props => props.theme.BorderColor};
  border-radius: 3px;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  position: relative;
`

const InputField = styled.input`
  padding-left: 6.5%;
  border: none;
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  font-size: 1vw;
  :focus{
    outline: none;
  }
`

const Helper = styled.div`
  height: 100%;
  margin-left: 2.4%;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  svg{
    height: 55%;
  }
`

// Example: <SearchBar placeholder={'<Text to add after search>'}/>

const SearchBar = (props) => {
    return (
        <Container>
            <Helper>
                <SearchIcon/>
            </Helper>
            <InputField placeholder={'Search ' + props.placeholder}/>
        </Container>
    )
}

export default SearchBar

