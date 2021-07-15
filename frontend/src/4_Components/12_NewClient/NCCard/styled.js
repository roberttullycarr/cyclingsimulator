import styled from "styled-components";

export const NewClientCardMain = styled.div`
  width: 100%;
  display: flex;
  background: white;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  padding: 1.2vw 1.2vw;
  border: 1px solid #BDBDBD;
  border-radius: 5px;
  margin-top: 2vw;
`;

export const NewClientForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const NCContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 33.33%;
  height: 100%;
`

export const NCContentLine = styled.div`
  width: 100%;
  display:flex;
  padding: .5vw 0;
`

export const FileInput = styled.input`
  width: 95%;
  margin-top: 3%;
  margin-left: 3%;
`