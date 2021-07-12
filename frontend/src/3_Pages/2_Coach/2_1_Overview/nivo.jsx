import React from 'react';
import {ResponsiveCalendar} from "@nivo/calendar";
import {indexOf} from "leaflet/src/core/Util";


const CalendarNivo = props => {

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
        <div style={{height: '400px', width: '85%', border: 'none'}}>
            <ResponsiveCalendar
                data={generateData()}
                from="2021-01-01"
                to="2021-12-30"
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
            />
        </div>
    )
};

export default CalendarNivo;
