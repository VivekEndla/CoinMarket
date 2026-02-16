import React from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, ResponsiveContainer } from 'recharts';

const LineBarChart = ({ data }) => {

    const coinHistory = data?.map((d) => ({
        date: new Date(d.timestamp * 1000).toLocaleString(),
        price: parseFloat(d?.price),
    })).slice(0, 50) || []

    console.log(data)
    console.log("coin History", coinHistory)

    return (
        <div style={{ width: '100%', height: 500 }}>
            <ResponsiveContainer>
                <ComposedChart data={coinHistory} margin={{ top: 20, right: 0, left: 0, bottom: 20 }} >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="date" style={{ fontSize: 10 }} />
                    <YAxis domain={['auto', 'auto']} />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="price" fill="#82ca9d" stroke="#82ca9d" />
                    <Bar dataKey="price" barSize={100} fill="#8884d8" />
                    <Line type="monotone" dataKey="price" stroke="#ff7300" />
                    <Scatter dataKey="price" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineBarChart;
