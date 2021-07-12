import React from 'react';
import {ResponsiveCalendar} from "@nivo/calendar";
import {ChartWrapper} from "../2_4_AthleteOverview/chart";


const CalendarNivo = props => {

    const getCurrentYear = () => {
        let result = []
        let start = `${new Date().getFullYear()}` + "-01-01"
        let end = `${new Date().getFullYear()}` + "-12-31"
        result.push(start, end)
        return  result
    }
    // generates data from the API response
    const generateData = () => {
        const sessions = props.sessions
        let data = [];

        sessions.forEach((session, index) => {
            if (index > 0 && session.created === sessions[index-1].created) {
                data[data.length-1]['value'] ++
            } else {
                data.push({
                    "day": session.created,
                    "value": 1
                })
            }
        })
        return data
    }



    return (
        <ChartWrapper style={{height: '300px'}}>
            <ResponsiveCalendar
                data={generateData()}
                from={getCurrentYear()[0]}
                to={getCurrentYear()[1]}
                emptyColor="#D3D3D3"
                colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                yearSpacing={60}
                monthBorderWidth={0}
                monthBorderColor="#000000"
                dayBorderColor="#ffffff"
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'row',
                        translateY: 36,
                        itemCount: 4,
                        itemWidth: 42,
                        itemHeight: 36,
                        itemsSpacing: 14,
                        itemDirection: 'right-to-left'
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
};

export default CalendarNivo;
