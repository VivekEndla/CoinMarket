import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PublicRoute = ({ children }) => {
    // ACCESSING THE USER DATA FORM REDUX-STORE TO CHECK WEATHER USER IS AUTHENTICATED OR NOT
    let { user, loading } = useSelector((state) => state.auth)

    if (loading) {
        return <h2>Loading...</h2>
    }

    return user ? <Navigate to="/dashboard" replace /> : children
}

export default PublicRoute
