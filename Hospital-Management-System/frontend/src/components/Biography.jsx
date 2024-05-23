import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Overview</h3>
          <p>
          Established in 1952, Lumina LifeCare has been a beacon
          of health and healing in our community for over 70 years. Located
          in the heart of the city, our hospital has grown from a small,
          community-focused clinic into a comprehensive, state-of-the-art
          medical facility known for its excellence in patient care,
          cutting-edge medical technology, and compassionate healthcare professionals.
          </p>
          

          <p>At Lumina LifeCAre, our mission is to provide high-quality, patient-centered
             care that improves the health and well-being of the communities we serve. We
             are dedicated to offering compassionate, personalized care and advanced medical
             treatments to every patient who walks through our doors.</p>

          
        </div>
      </div>
    </>
  );
};

export default Biography;