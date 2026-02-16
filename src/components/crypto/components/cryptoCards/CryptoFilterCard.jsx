import React from 'react'
import { useState, useEffect } from 'react'
import useCryptomarkets from '../../hooks/useCryptomarkets'
import useCryptoHistory from '../../hooks/useCryptoHistory'
import LineBarChart from '../graphs/LineBarChart'
import { Symbols } from 'recharts'


// default timePeriods
let timePeriods = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"]

const CryptoFilterCard = () => {
    // setting the default and selected timePeriods
    let [selectedTimePeriod, setSelectedTimePeriod] = useState("24h");

    // fetching all the coins 
    let { coins, isLoading, isError } = useCryptomarkets();
    console.log(coins)

    // displaying only top rated coins
    let filteredCoins = coins.filter((coin) => ["BTC", "ETH", "USDT", "XRP", "BNB"].includes(coin.symbol));

    // setting active tab
    let [activeTabKey, setActiveTabKey] = useState("");
    console.log(activeTabKey)


    // getting the history of selected tab for selected timePeriod
    let { history } = useCryptoHistory(activeTabKey, selectedTimePeriod);

    // selecting default tab key coin id when browser is loading
    useEffect(() => {
        if (coins.length > 0) {
            setActiveTabKey(coins[0].uuid)
        }
    }, [coins])

    // functions for handling the tabChanges and timePeriods
    let handleTabChange = (key) => setActiveTabKey(key)
    let handletimePeriod = (e) => setSelectedTimePeriod(e.target.value)
    let handleSelectedCoin = filteredCoins.find((coin) => coin.uuid === activeTabKey);
    return (
        <div className='container my-2 p-2'>
            <div className="card">
                {
                    isLoading ? (
                        <>
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='card-header d-flex justify-content-between'>
                                {/** selected coins */}
                                {handleSelectedCoin ? (<>
                                    <div className=''>
                                        <img src={handleSelectedCoin.iconUrl} alt={handleSelectedCoin.symbol}
                                            style={{ width: '30px', height: '30px', borderRadius: '50%' }} className='mx-2' />
                                        <span>{handleSelectedCoin.symbol}</span>
                                    </div>
                                </>) : (<h3>select the coin</h3>)}
                                {/** timePeriods */}

                                <select class="form-select w-auto" value={selectedTimePeriod} onChange={handletimePeriod} >
                                    {
                                        timePeriods.map((period) => (
                                            <option value={period} key={period}>{period}</option>
                                        ))
                                    }
                                </select>

                            </div>
                            {/* Tabs for the coins */}
                            <ul class="nav nav-tabs">
                                {
                                    filteredCoins.map((coin) => (
                                        <li class="nav-item">
                                            <button className={`nav-link ${activeTabKey === coin.uuid ? "active" : ""}`} onClick={() => handleTabChange(coin.uuid)} >
                                                {coin.symbol}
                                            </button>

                                        </li>
                                    ))
                                }
                            </ul>

                            {/* Graph */}
                            <div className="graph">
                                <LineBarChart data={history} />
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default CryptoFilterCard
