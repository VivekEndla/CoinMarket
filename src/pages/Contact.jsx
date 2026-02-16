// 🔥 COIN MARKET - ELITE CONTACT PAGE

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Contact = () => {

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const inputStyle = {
    background: "#c1c8d8",
    color: "rgb(255, 255, 255)",
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "12px",
  };

  return (

    <div style={{ background:"#020617", color:"#fafafa", minHeight:"100vh" }}>

      <Navbar/>

      {/* ================= HERO ================= */}

      <section
        className="text-center py-5"
        style={{
          background:"radial-gradient(circle at top,#0f172a,#020617)"
        }}
      >
        <div className="container" data-aos="zoom-in">

          <h1
            className="display-3 fw-bold"
            style={{
              background:"linear-gradient(90deg,#facc15,#38bdf8)",
              WebkitBackgroundClip:"text",
              color:"transparent"
            }}
          >
            Contact Coin Market
          </h1>

          <p style={{ color:"#94a3b8" }} className="mt-3">
            Need help or have feedback? Reach out anytime.
          </p>

        </div>
      </section>


      {/* ================= CONTACT FORM ================= */}

      <section className="py-5">

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-6" data-aos="fade-up">

              <div
                className="p-5 rounded-4 shadow-lg"
                style={{
                  background:"rgba(255,255,255,0.04)",
                  border:"1px solid rgba(255,255,255,0.08)",
                  backdropFilter:"blur(14px)"
                }}
              >

                <h4 className="fw-bold mb-4 text-center">
                  Send Message
                </h4>

                <form>

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Your Name"
                    style={inputStyle}
                  />

                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email Address"
                    style={inputStyle}
                  />

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Subject"
                    style={inputStyle}
                  />

                  <textarea
                    rows="4"
                    className="form-control mb-4"
                    placeholder="Write your message..."
                    style={inputStyle}
                  ></textarea>

                  <button
                    className="btn w-100 fw-bold"
                    style={{
                      background:"linear-gradient(90deg,#facc15,#38bdf8)",
                      border:"none",
                      color:"#020617"
                    }}
                  >
                    Submit Message
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT CHANNELS ================= */}

      <section className="py-5 text-center">

        <div className="container">

          <h3 className="fw-bold mb-4">Connect With Coin Market</h3>

          <div className="d-flex justify-content-center gap-5 fs-1">

            <i className="bi bi-telegram text-info"></i>
            <i className="bi bi-twitter text-primary"></i>
            <i className="bi bi-discord text-light"></i>
            <i className="bi bi-envelope text-warning"></i>

          </div>

        </div>

      </section>


      <Footer/>

    </div>

  );
};

export default Contact;
