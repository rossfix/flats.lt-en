import React from "react";
import AppSidebar from "../../components/AppSidebar";
import AgreementsComponent from "../../components/AppAgreements";
import { Helmet } from "react-helmet";

const divStyle = {
  display: "flex"
};

const AgreementsPage = () => {
  return (
    <div style={divStyle}>
      <Helmet>
        <title>Savitarna</title>
      </Helmet>
      <AppSidebar />
      <AgreementsComponent />
    </div>
  );
};

export default AgreementsPage;
