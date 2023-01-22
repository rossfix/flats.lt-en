import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import StationarNav from "../components/Navbar/NoNav";
import ArticlesHomeComponent from "../components/ArticlesHome";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const AllArticlesPage = () => {
  return (
    <>
      <Helmet>
        <title>Real Estate rental articles</title>
        <meta
          name="description"
          content="Real estate rental articles that will help manage real estate and administer its rental more effectively."
          data-react-helmet="true"
       />
      </Helmet>
      <ScrollToTop />
      <StationarNav />
      <ArticlesHomeComponent />
      <Footer />
    </>
  );
};

export default AllArticlesPage;
