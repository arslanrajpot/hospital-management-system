// import React from "react";
import PropTypes from "prop-types";
const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            AyeCare Medical Institute is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient. At
            AyeCare, we prioritize your well-being, ensuring a harmonious
            journey towards optimal health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};
Hero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Hero;
