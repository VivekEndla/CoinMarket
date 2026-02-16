import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
import { Line } from 'react-chartjs-2';


const LineChart = ({ data }) => {
    const chartData = {
        labels: data.map((d) => new Date(d.timestamp * 1000).toLocaleTimeString()),
        datasets: [
            {
                label: 'Price',
                data: data.map((coin) => parseFloat(coin.price)),
                borderColor: data.map((coin) => {
                    let coinPrice = coin.price
                    if (coinPrice > 6.5) return "green"
                    if (coinPrice < 6.5) return "red"
                    return "orange"
                }),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                fill: false,
                lineTension: 1,
                borderWidth: 2,
                pointRadius: 0
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            },
        },
    };

    return (
        <div style={{ width: '100%', height: '100px' }}>
            <Line options={options} data={chartData} />

        </div>
    )
}

export default LineChart
