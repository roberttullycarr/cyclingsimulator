import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";

const Chart = props => {
    return(
        <BarChart
            width={1000}
            height={300}
            data={props.data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="heart_rate" fill="#8884d8" />
            <Bar yAxisId="right" dataKey="pat" fill="#82ca9d" />
        </BarChart>
    )
}

export default Chart