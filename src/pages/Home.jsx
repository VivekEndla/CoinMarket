// 🔥 COIN MARKET - PREMIUM DASHBOARD STYLE HOME

import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div style={{ background:"#020617", color:"#e2e8f0" }}>

      <Navbar/>

      {/* ================= HERO (COIN MARKET BRAND) ================= */}

      <section className="py-5 text-center position-relative"
        style={{
          background:"radial-gradient(circle at top,#0f172a,#020617)"
        }}
      >
        <div className="container">

          <h1 className="display-1 fw-bold"
              style={{
                background:"linear-gradient(90deg,#facc15,#38bdf8)",
                WebkitBackgroundClip:"text",
                color:"transparent"
              }}
              data-aos="zoom-in"
          >
            COIN MARKET
          </h1>

          <p className="text-secondary fs-5" data-aos="fade-up">
            Real-time crypto insights • Market analytics • Smart tracking
          </p>

        </div>
      </section>


      {/* ================= MARKET OVERVIEW ================= */}

      <section className="py-5">

        <div className="container">

          <div className="row g-4 text-center">

            {[
              {title:"Global Market Cap",value:"$1.18T"},
              {title:"24h Volume",value:"$42.3B"},
              {title:"BTC Dominance",value:"48.6%"},
              {title:"Active Cryptos",value:"12,300+"}
            ].map((item,i)=>(
              <div className="col-md-3" key={i} data-aos="fade-up">
                <div className="p-4 rounded-4 shadow-lg"
                  style={{
                    background:"rgba(255,255,255,0.03)",
                    border:"1px solid rgba(255,255,255,0.08)",
                    backdropFilter:"blur(12px)"
                  }}
                >
                  <p className="text-secondary mb-2">{item.title}</p>
                  <h3 className="fw-bold text-warning">{item.value}</h3>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>



      {/* ================= TRENDING COINS (KEEPED) ================= */}

      <section className="py-5"
        style={{
          background:"linear-gradient(180deg,#020617,#0f172a)"
        }}
      >
        <div className="container text-center">

          <h2 className="fw-bold mb-5" data-aos="fade-up">
            🔥 Trending Coins
          </h2>

          <div className="row g-4">

            {[
              {name:"Bitcoin",price:"$27,890",change:"+3.1%"},
              {name:"Ethereum",price:"$1,850",change:"+2.7%"},
              {name:"Litecoin",price:"$104",change:"+1.4%"}
            ].map((coin,idx)=>(
              <div className="col-md-4" key={idx}
                   data-aos="zoom-in"
                   data-aos-delay={idx*150}
              >
                <div className="p-4 rounded-4 shadow-lg"
                  style={{
                    background:"#020617",
                    border:"1px solid rgba(255,255,255,0.08)"
                  }}
                >
                  <h4 className="text-warning">{coin.name}</h4>
                  <p className="text-success fw-semibold">{coin.change}</p>
                  <p className="fs-5">{coin.price}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>



      {/* ================= MARKET HIGHLIGHTS ================= */}

      <section className="py-5 text-center">

        <div className="container">

          <h2 className="fw-bold mb-5">Market Highlights</h2>

          <Carousel indicators={false} controls={false} interval={3500}>

            {[
              "Bitcoin leading market momentum this week.",
              "Ethereum ecosystem seeing rising activity.",
              "Altcoins showing strong recovery signals."
            ].map((news,i)=>(
              <Carousel.Item key={i}>
                <p className="fs-4 text-secondary">{news}</p>
              </Carousel.Item>
            ))}

          </Carousel>

        </div>

      </section>


      <Footer/>

    </div>
  );
};

export default Home;
