import React from "react";
import AppSidebar from "../../components/AppSidebar";
import LockComponent from "../../components/AppLock";
import { Helmet } from "react-helmet";

const divStyle = {
  display: "flex"
};

const LockPage = () => {
  return (
    <div style={divStyle}>
      <Helmet>
        <title>Savitarna</title>
      </Helmet>
      <AppSidebar />
      <LockComponent />
    </div>
  );
};

export default LockPage;
