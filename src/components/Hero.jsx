import React from "react";
import docs from "../images/docs.png";
import logo from "../images/logo.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
      <img
        src={logo}
        alt="Logo"
        style={{ width: '60%' }}
      />
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <h3>
            Book your appointment with a specialist doctor and keep track of your appointment
        </h3>
      </div>
      <div className="hero-img">
        <img
           style={{ width: '80%' }}
          src={docs}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
