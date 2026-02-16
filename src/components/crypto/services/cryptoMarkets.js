import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


let cryptoHeaders = {
    'x-rapidapi-key': '3f9431608cmsh06de4d2648cb996p1f487cjsn3bca0ee74229',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoHeaders });


export const CryptoMarketApi = createApi({
    reducerPath: 'CryptoMarketApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoMarkets: builder.query({
            query: () => createRequest('/coins') // get all coins from crypto coins api
        }),
        getCryptoStats: builder.query({
            query: () => createRequest('/stats') // get all coins from crypto stats api
        }),
        getCryptoCoinDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`) // get all coins from crypto details api
        }),
        getCryptoCoinHistory: builder.query({
            query: (coinId,timePeriod="3h") => createRequest(`/coin/${coinId}/history?&timePeriod=${timePeriod}`) // get all coins from crypto history api
        }),
    }),
})

// export hooks for usage in functional components,which are
// auto-generated based on the endpoints
export const { useGetCryptoMarketsQuery, useGetCryptoStatsQuery, useGetCryptoCoinDetailsQuery, useGetCryptoCoinHistoryQuery } = CryptoMarketApi