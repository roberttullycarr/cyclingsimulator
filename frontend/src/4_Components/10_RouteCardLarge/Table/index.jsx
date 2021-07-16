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
  max-height: 31.9vw;
  overflow: auto;
  color: ${props => props.theme.SlightlyBlack};
  div:nth-child(even){color: ${props => props.theme.SlightlyBlack};}
  div:nth-child(odd){color: ${props => props.theme.AccentGray};}
`


const Head = styled.div`
  display: flex;
  margin-bottom: 1%;
  h1{
    font-size: 1.2vw;
    width: 16.67%;
    height: 3.19vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.TableBlue};
    color: ${props => props.theme.ELWhite};
    border-radius: 5px;
    margin-left: 0.5%;
    margin-right: 0.5%;
  }
`

const Row = styled.div`
  display: flex;
  h1{
    font-size: 1.2vw;
    height: 3.19vw;
    width: 100%;
    margin-left: 0.5%;
    margin-right: 0.5%;
  }
`


const Table = props => {

    return (

        <DetailTable>
            <Head>
                <h1>Segment</h1>
                <h1>Distance in Meters</h1>
                <h1>Grade</h1>
                <h1>Speed KM/H</h1>
                <h1>Speed M/S</h1>
                <h1>Time</h1>
            </Head>
            <Wrapper>
                {
                    props.segments.map(segment =>
                        <Row key={segment}>
                            <h1>{segment.segment}</h1>
                            <h1>{segment.distance}</h1>
                            <h1>{segment['average_grade']}</h1>
                            <h1>{segment['speed_in_km']}</h1>
                            <h1>{segment['speed_in_m']}</h1>
                            <h1>{segment.time}</h1>
                        </Row>)
                }
            </Wrapper>
        </DetailTable>

    )}

export default Table
