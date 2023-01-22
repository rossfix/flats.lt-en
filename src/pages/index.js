import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Helmet>
        <title>Property management in Lithuania - Flats.lt</title>
        <meta
          name="description"
          content="All real estate property management in Lithuania services in one place. We administer the entire cycle of rental services: from the search to the end of the contract."
          data-react-helmet="true"
       />
    
      </Helmet>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
