import React from 'react'
import useCryptoStats from '../../hooks/useCryptoStats'
import CryptoAreaGraph from '../graphs/CryptoAreaGraph'

const BestCryptoStats = () => {
    const { stats, isLoading, isError } = useCryptoStats()
    console.log(stats)

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Error...</h1>
    }

    // destructuring the BestCoins
    let { bestCoins = [] } = stats;
    console.log("best coins", bestCoins)

    return (
        <div className='container my-2'>
            <div className="row">
                {
                    bestCoins.map((coin) => <CryptoAreaGraph key={coin.uuid} coin={coin} />)
                }
            </div>
        </div>
    )
}

export default BestCryptoStats
