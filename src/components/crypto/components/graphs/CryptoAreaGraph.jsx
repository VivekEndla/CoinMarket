import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useCryptoHistory from '../../hooks/useCryptoHistory';
import { curveCardinal } from 'd3-shape';

const CryptoAreaGraph = ({ coin }) => {
    let { uuid, iconUrl, name, symbol } = coin;

    // getting the history of the top best coins by populating the id's
    const { history, isLoading, isError } = useCryptoHistory(uuid, "24h")

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Error...</h1>
    }

    // generating the coin history
    const coinHistory = history?.map((ele) => ({
        date: new Date(ele.timestamp * 1000).toLocaleDateString(),
        price: parseFloat(ele?.price),
    }))

    console.log(history)
    console.log("coin History", coinHistory)

    // generating the colors based price variation
    let firstPrice = coinHistory[0]?.price
    let lastPrice = coinHistory[coinHistory.length - 1]?.price
    let fillcolor = firstPrice >= lastPrice ? "green" : "red"
    let strokecolor = firstPrice <= lastPrice ? "orange" : "green"

    const cardinal = curveCardinal.tension(0.2);

    return (
        <div className='col-sm-12 col-md-4 col-lg-4'>
            <div className="card border border-success shadow p-1">

                <div className='card-header d-flex '>
                    <img src={iconUrl} alt={symbol} width={"30px"} height={"30px"} />
                    <h5 className='card-title mx-3'>{name}</h5>
                    <p>{symbol}</p>
                </div>

                <div className="card-body" style={{ height: '300px', width: '100%' }}>
                    <ResponsiveContainer >
                        <AreaChart
                            width={500}
                            height={400}
                            data={coinHistory}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            {/* <XAxis dataKey="name" />
                            <YAxis /> */}
                            <Tooltip />
                            <Area type="monotone" dataKey="price" stroke={strokecolor} fill={fillcolor} />
                            <Area type={cardinal} dataKey="price" stroke={strokecolor} fill={fillcolor} fillOpacity={0.3} />

                        </AreaChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    )
}

export default CryptoAreaGraph
