import React from "react";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import AppStore from "../AppStore/AppStore";
import Testimonial from "../Testimonial/Testimonial";
import Books from "../BooksSlider/Books";

const Home = ({ handleOrderPopup }) => {
  return (
    <>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Banner />
      <AppStore />
      <Books />
      <Testimonial />
    </>
  );
};

export default Home;
