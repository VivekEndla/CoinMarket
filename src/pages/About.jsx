import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const About = () => {

  useEffect(()=>{
    AOS.init({ duration:900, once:true });
  },[]);

  return (

    <div style={{ background:"#020617", color:"#e2e8f0" }}>

      <Navbar/>

      {/* ================= HERO ================= */}

      <section
        className="text-center py-5"
        style={{
          background:"radial-gradient(circle at top,#0f172a,#020617)"
        }}
      >
        <div className="container">

          <h1
            className="display-2 fw-bold"
            data-aos="zoom-in"
            style={{
              background:"linear-gradient(90deg,#facc15,#38bdf8)",
              WebkitBackgroundClip:"text",
              color:"transparent"
            }}
          >
            COIN MARKET
          </h1>

          <p className="text-secondary fs-5 mt-3" data-aos="fade-up">
            A modern crypto intelligence platform designed for real-time
            tracking, deep analytics, and smarter digital asset decisions.
          </p>

        </div>
      </section>


      {/* ================= PLATFORM PHILOSOPHY ================= */}

      <section className="py-5">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6" data-aos="fade-right">

              <h2 className="fw-bold mb-3">
                Built For The Future of Crypto
              </h2>

              <p className="text-secondary">
                Coin Market is designed to simplify crypto monitoring,
                market insights, and data-driven decision making.
                We focus on clarity, speed, and transparency.
              </p>

              <p className="text-secondary">
                Our goal is to provide a clean and powerful interface
                where users can understand market movements instantly.
              </p>

            </div>

            <div className="col-md-6 text-center" data-aos="zoom-in">
              <img
                src="/assets/aboutback.jpg"
                alt="crypto"
                className="img-fluid rounded-4 shadow"
              />
            </div>

          </div>

        </div>

      </section>



      {/* ================= CORE FEATURES ================= */}

      <section className="py-5">

        <div className="container text-center">

          <h2 className="fw-bold mb-5">Platform Capabilities</h2>

          <div className="row g-4">

            {[
              {icon:"📊", title:"Real-Time Market Tracking"},
              {icon:"⚡", title:"Fast Data Visualization"},
              {icon:"🔐", title:"Security Focused Design"},
              {icon:"🌐", title:"Web3 Ready Architecture"}
            ].map((item,i)=>(

              <div className="col-md-3" key={i} data-aos="zoom-in" data-aos-delay={i*150}>

                <div
                  className="p-4 rounded-4 shadow-lg h-100"
                  style={{
                    background:"rgba(255,255,255,0.03)",
                    border:"1px solid rgba(255,255,255,0.08)",
                    backdropFilter:"blur(12px)"
                  }}
                >
                  <div className="display-4 mb-3">{item.icon}</div>
                  <h5 className="fw-bold">{item.title}</h5>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= TECHNOLOGY SECTION ================= */}

      <section className="py-5"
        style={{ background:"linear-gradient(180deg,#020617,#0f172a)" }}
      >

        <div className="container text-center">

          <h2 className="fw-bold mb-4">Technology & Architecture</h2>

          <p className="text-secondary col-md-8 mx-auto">
            Built using modern web technologies and scalable data architecture,
            Coin Market delivers smooth performance, responsive design,
            and real-time crypto data visualization.
          </p>

        </div>

      </section>



      {/* ================= SECURITY ================= */}


      <Footer/>

    </div>
  );
};

export default About;
