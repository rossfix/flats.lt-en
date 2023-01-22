import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import StationarNav from "../components/Navbar/NoNav";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact real estate management professionals</title>
        <meta
          name="description"
          content="Contact real estate management professionals. Leave your real estate rental questions to us and we will solve them!"
          data-react-helmet="true"
       />
      </Helmet>
      <ScrollToTop />
      <StationarNav />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;
