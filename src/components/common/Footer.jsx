import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-3" style={{ background: 'linear-gradient(to right, #0f172a, #1e293b)' }}>
      <div className="container">
        <div className="row g-4 justify-content-between align-items-start">
          {/* Brand and Tagline */}
          <div className="col-md-4">
            <h4 className="fw-bold">CoinMarket</h4>
            <p className="text-secondary">Empowering your crypto journey, securely and smartly.</p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/home" className="text-secondary text-decoration-none">Home</NavLink></li>
              <li><NavLink to="/about" className="text-secondary text-decoration-none">About</NavLink></li>
              <li><NavLink to="/contact" className="text-secondary text-decoration-none">Contact</NavLink></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5"><FaFacebookF /></a>
              <a href="#" className="text-white fs-5"><FaTwitter /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
              <a href="#" className="text-white fs-5"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="text-secondary my-4" />

        {/* Copyright */}
        <div className="text-center text-secondary small">
          &copy; {new Date().getFullYear()} CryptoSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
