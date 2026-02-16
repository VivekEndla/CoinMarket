import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PublicRoute = ({ children }) => {

    // ACCESSING USER DATA FROM REDUX STORE
    let { user, loading } = useSelector((state) => state.auth)

    if (loading) {
        return (
            <div
                style={{
                    height: "100vh",
                    background: "radial-gradient(circle at top,#0f172a,#020617)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    color: "#fff"
                }}
            >

                {/* Elite Crypto Loader */}
                <div
                    style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        border: "4px solid rgba(255,255,255,0.1)",
                        borderTop: "4px solid #38bdf8",
                        borderRight: "4px solid #facc15",
                        animation: "spinGlow 1s linear infinite",
                        boxShadow: "0 0 25px rgba(56,189,248,0.6)"
                    }}
                ></div>

                <h5 style={{ marginTop: "20px", letterSpacing: "2px" }}>
                    Loading Coin Market...
                </h5>

                {/* Animation keyframes */}
                <style>
                    {`
                    @keyframes spinGlow {
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                    `}
                </style>

            </div>
        )
    }

    return user ? <Navigate to="/dashboard" replace /> : children
}

export default PublicRoute
