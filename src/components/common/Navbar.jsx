import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          background: "rgba(15,23,42,0.85)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          zIndex: 1000,
        }}
      >
        <div className="container">

          {/* BRAND */}
          <NavLink
            className="navbar-brand fw-bold"
            to="/"
            style={{
              background: "linear-gradient(90deg,#facc15,#38bdf8)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: "1.4rem",
            }}
          >
            Coin Market
          </NavLink>

          {/* MOBILE TOGGLE */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV LINKS */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={{ color: "#e2e8f0" }}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={{ color: "#e2e8f0" }}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  style={{ color: "#e2e8f0" }}
                >
                  Contact
                </NavLink>
              </li>

            </ul>

            {/* DASHBOARD BUTTON */}
            <Link to="/dashboard">
              <button
                className="btn fw-semibold"
                style={{
                  background: "linear-gradient(90deg,#facc15,#38bdf8)",
                  border: "none",
                  color: "#020617",
                  borderRadius: "999px",
                  padding: "6px 18px",
                }}
              >
                Dashboard
              </button>
            </Link>

          </div>
        </div>
      </nav>

      {/* 👇 SPACER FIXES CONTENT OVERLAP */}
      <div style={{ height: "72px" }}></div>
    </>
  );
};

export default Navbar;
