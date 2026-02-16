import { configureStore } from '@reduxjs/toolkit'
import { CryptoMarketApi } from '../components/crypto/services/cryptoMarkets'
import { authApi } from '../components/auth/services/authApi'
import authReducer from "../components/auth/services/authSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        // Add the generated reducer as a specific top-level slice
        [authApi.reducerPath]: authApi.reducer,
        [CryptoMarketApi.reducerPath]: CryptoMarketApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(CryptoMarketApi.middleware, authApi.middleware),
})

export default store