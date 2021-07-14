import styled from "styled-components";

export const NewSessionMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin-bottom: 2vw;
`
export const NewSessionCard = styled.div`
  width: 100%;
  background: white;
  box-shadow: ${props => props.theme.BoxShadowWidget};
  padding: 1.2vw 0;
  border: 1px solid #BDBDBD;
  border-radius: 5px;
  margin-top: 2vw;
`;

export const NSContent = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-end;
`;

export const SessionClient = styled.h1`
  margin-left: 14px;
  font-size: 1.2vw;
  color: ${props => props.theme.SlightlyBlack};
`;

export const FormWrap = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
`

export const ButtonWrap = styled(NSContent)`
justify-content: center !important;
`
