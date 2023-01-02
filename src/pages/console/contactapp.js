import React from "react";
import AppSidebar from "../../components/AppSidebar";
import ContactsComponent from "../../components/AppContacts";
import { Helmet } from "react-helmet";

const divStyle = {
  display: "flex"
};

const ComunicationPage = () => {
  return (
    <div style={divStyle}>
      <Helmet>
        <title>Savitarna</title>
      </Helmet>
      <AppSidebar />
      <ContactsComponent />
    </div>
  );
};

export default ComunicationPage;
