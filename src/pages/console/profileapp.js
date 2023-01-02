import React from "react";
import AppSidebar from "../../components/AppSidebar";
import ProfileComponent from "../../components/AppProfile";
import { Helmet } from "react-helmet";

const divStyle = {
  display: "flex"
};

const ProfilePage = () => {
  return (
    <div style={divStyle}>
      <Helmet>
        <title>Savitarna</title>
      </Helmet>
      <AppSidebar />
      <ProfileComponent />
    </div>
  );
};

export default ProfilePage;
