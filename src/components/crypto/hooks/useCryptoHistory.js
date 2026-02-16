import React from 'react'
import { useGetCryptoCoinHistoryQuery } from '../services/cryptoMarkets';

const useCryptoHistory = (coinid = "qzawljRxB5bYu", timePeriod = "3h") => {
    console.log(timePeriod)
    const { data, isLoading, isError } = useGetCryptoCoinHistoryQuery(coinid, timePeriod)

    let history = data?.data?.history || []
    return { history, isLoading, isError }
}

export default useCryptoHistory
