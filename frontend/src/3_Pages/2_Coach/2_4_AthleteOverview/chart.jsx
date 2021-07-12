import React from 'react';
import {ResponsiveLine} from "@nivo/line";


const LineNivo = props => {

    const generateData = () => {
        const data = []
        const sessions = props.sessions
        sessions.map(session =>
            data.push(
                {
                    "id": session.created,
                    "color": "hsl(212, 70%, 50%)",
                    "data": [
                        {
                            "x": "Heart Rate in BPM",
                            "y": session['heart_rate']
                        },
                        {
                            "x": "Power in W",
                            "y": session['pat']
                        },
                        {
                            "x": "Weight in KG",
                            "y": session['weight']
                        }
                    ]
                }
            )
        )
        return data
    }



    return (
        <div style={{height: '600px', width: '85%', border: 'none', marginBottom: '50px'}}>
            <ResponsiveLine
                data={generateData()}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', stacked: false, min: 'auto', max: 'auto' }}
                curve="catmullRom"
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
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Stats for the last 5 sessions',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Rate',
                    legendOffset: -40,
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
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translateX: 133,
                        translateY: -3,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 78,
                        itemHeight: 53,
                        itemOpacity: 0.75,
                        symbolSize: 17,
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
            />
        </div>
    )
};

export default LineNivo;
