import React from "react";
import AppSidebar from "../../components/AppSidebar";
import FlatsComponent from "../../components/AppFlats";
import { Helmet } from "react-helmet";

const divStyle = {
  display: "flex"
};

const FlatsPage = () => {
  return (
    <div style={divStyle}>
      <Helmet>
        <title>Savitarna</title>
      </Helmet>
      <AppSidebar />
      <FlatsComponent />
    </div>
  );
};

export default FlatsPage;
