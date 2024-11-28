// import React from "react";
import PropTypes from "prop-types";
const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          We are a forward-thinking data development company dedicated to 
          empowering businesses through innovative data-driven solutions. 
          Our team specializes in designing, implementing, and optimizing 
          data systems that transform raw information into actionable insights. 
          By leveraging cutting-edge technologies and advanced analytics, 
          we help organizations streamline operations, improve decision-making, 
          and unlock new opportunities for growth. With a focus on precision, 
          scalability, and security, we are committed to delivering solutions 
          that meet the unique needs of our clients in an ever-evolving digital 
          landscape. Together, we shape the future of data.!
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a Different Tech Stacks like MERN, MEAN, and in ROR.</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

Biography.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default Biography;
