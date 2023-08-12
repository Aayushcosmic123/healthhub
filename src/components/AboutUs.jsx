import React from "react";
import heroimg from "../images/heroimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={heroimg}
              alt="hero"
            />
          </div>
          <div >
            <p>
            At Health-Hub, we understand that managing your health should be simple, efficient, and tailored to your needs. Our platform is designed to bring together patients and healthcare professionals in a seamless and convenient manner. With our user-friendly system, you can easily book appointments with your preferred doctors or specialists while also having the option to apply for appointments that suit your schedule.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
