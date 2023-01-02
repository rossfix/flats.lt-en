import React from "react";
import AppSidebar from "../../components/AppSidebar";
import PaymentsComponent from "../../components/AppPayments";
import { Helmet } from "react-helmet";

const divStyle = {
  display: "flex"
};

const PaymentsPage = () => {
  return (
    <div style={divStyle}>
      <Helmet>
        <title>Savitarna</title>
      </Helmet>
      <AppSidebar />
      <PaymentsComponent />
    </div>
  );
};

export default PaymentsPage;
