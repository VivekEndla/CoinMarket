import React from 'react'
import { useGetCryptoStatsQuery } from '../services/cryptoMarkets'

const useCryptoStats = () => {
    const { data, isLoading, isError } = useGetCryptoStatsQuery();
    let stats = data?.data || {}
    return { stats, isLoading, isError }
}

export default useCryptoStats
