import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import StationarNav from "../components/Navbar/NoNav";
import Hero from "../images/nekilnojamo_turto_nuomos_administravimas.png";
import {
  HeroBg,
  HeroContainer,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP
} from "../components/HeroSection/HeroElements";
import { NavBtnLink } from "../components/Navbar/NavbarElements";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Failed!</title>
      </Helmet>
      <ScrollToTop />
      <StationarNav />
      <HeroContainer>
        <HeroBg>
          <ImageBg src={Hero} />
        </HeroBg>
        <HeroContent>
          <HeroH1>404</HeroH1>
          <HeroP>This page does not exist</HeroP>
          <NavBtnLink to="/">Go Home</NavBtnLink>
        </HeroContent>
      </HeroContainer>
      <Footer />
    </>
  );
};

export default ErrorPage;
