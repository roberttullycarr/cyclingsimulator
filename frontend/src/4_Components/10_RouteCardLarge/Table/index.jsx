import styled from "styled-components";


const DetailTable = styled.div`
  border-spacing: 1.2em;
  width: 87.5%;
  font-weight: ${props => props.theme.textWeightBold};
  color: ${props => props.theme.AccentGray};
  text-align: center;
  justify-self: center;
`

const Wrapper = styled.div`
  width: 100%;
  height: 31.9vw;
  overflow: auto;
  div:nth-child(even){color: ${props => props.theme.SlightlyBlack};}
  div:nth-child(odd){color: ${props => props.theme.AccentGray};}
`


const Head = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1%;
  h1{
    font-size: 1.2vw;
    width: 16.67%;
    height: 3.19vw;
    background-color: ${props => props.theme.TableBlue};
    color: ${props => props.theme.ELWhite};
    border-radius: 5px;
    text-align: center;
    margin-left: 0.5%;
    margin-right: 0.5%;
  }
`

const Row = styled.div`
  display: flex;
  width: 100%;
  h1{
    font-size: 1.2vw;
    height: 3.19vw;
    width: 100%;
    margin-left: 0.5%;
    margin-right: 0.5%;
  }
`


const Table = () => {
    return (

        <DetailTable>
            <Head>
                <h1>KM</h1>
                <h1>Distance</h1>
                <h1>Grade</h1>
                <h1>Speed KM/H</h1>
                <h1>Speed M/S</h1>
                <h1>Time</h1>
            </Head>
            <Wrapper>
                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>
                                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>                <Row>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                </Row>
            </Wrapper>
        </DetailTable>

    )}

export default Table
