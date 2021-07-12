import styled from "styled-components";

const DetailTable = styled.table`
  width: 100%;
`

const Head = styled.tr`
  width: 100%;
  th{
    width: 16.67%;
    height: 3.19vw;
    background-color: ${props => props.theme.TableBlue};
    background-repeat: no-repeat;
    background-size:  50% 50%, cover;
    color: ${props => props.theme.ELWhite};
    border-radius: 5px;
  }
`


const Table = () => {
    return (
        <DetailTable>
            <Head>
                <th>KM</th>
                <th>Distance</th>
                <th>Grade</th>
                <th>Speed KM/H</th>
                <th>Speed M/S</th>
                <th>Time</th>
            </Head>
            <tr>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
                <td>test</td>
            </tr>
        </DetailTable>
    )}

export default Table
