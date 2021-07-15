import React from 'react';
import {ResponsiveLine} from "@nivo/line";
import styled from "styled-components";

export const ChartWrapper = styled.div`
  box-shadow: ${props => props.theme.BoxShadowWidget};
  background-color: ${props => props.theme.ELWhite};
  display: flex;
  justify-content: center;
  height: 500px;
  width: 85%;
  margin-top: 2vw;
  margin-bottom: 2vw;
  border: 1px solid #BDBDBD;
  border-radius: 5px;
  padding: 2%;
`

const LineNivo = props => {

    const generateData = () => {
        const data = [
            {
                "id": "Power in W",
                "data": []
            },
            {
                "id": "Hear Rate in BPM",
                "data": []
            },
            {
                "id": "Weight in KG",
                "data": []
            }
        ]
        const sessions = props.sessions
        sessions.map(session => {
                data[0].data.push(
                    {
                        "x": session.created,
                        "y": session['pat']
                    })
                data[1].data.push(
                    {
                        "x": session.created,
                        "y": session['heart_rate']
                    })
                data[2].data.push(
                    {
                        "x": session.created,
                        "y": session['weight']
                    })
            }
        )
        return data
    }


    return (
        <ChartWrapper>
            <ResponsiveLine
                data={generateData()}
                margin={{ top: 50, right: 80, bottom: 50, left: 80 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', stacked: false, min: 'auto', max: 'auto' }}
                curve="natural"
                axisTop={null}
                axisRight={{
                    orient: 'right',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 2,
                    legendOffset: -35
                }}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 10,
                    tickRotation: 0,
                    legend: 'Stats for the last 5 sessions',
                    legendOffset: 45,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 1,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendOffset: -50,
                    legendPosition: 'middle'
                }}
                colors={{ scheme: 'set1' }}
                lineWidth={4}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={1}
                pointBorderColor="#9d9d9d"
                pointLabel="y"
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'top',
                        direction: 'row',
                        justify: false,
                        translateX: -11,
                        translateY: -40,
                        itemsSpacing: 100,
                        itemDirection: 'left-to-right',
                        itemWidth: 83,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                theme={
                    {
                        "background": "#ffffff",
                        "textColor": "#333333",
                        "fontSize": 15,
                    }
                }
            />
        </ChartWrapper>
    )
}

export default LineNivo;
