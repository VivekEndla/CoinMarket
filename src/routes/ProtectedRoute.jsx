import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
    // ACCESSING THE USER DATA FORM REDUX-STORE TO CHECK WEATHER USER IS AUTHENTICATED OR NOT
    let { user, loading } = useSelector((state) => state.auth)

    if (loading) {
        return <h2>Loading...</h2>
    }

    return user ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute
