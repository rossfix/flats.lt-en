import React from "react";
import {
  SidebarContainer,
  SidebarTop,
  SidebarLogo,
  SidebarHr,
  SidebarCenter,
  SidebarList,
  SidebarListItem,
  SidebarNames,
  ProfileIcon,
  FlatsIcon,
  AgreementsIcon,
  PaymentsIcon,
  LockIcon,
  ContactsIcon,
  LogOutIcon
} from "./Sidebar2Elements";

const AppSidebar = () => {
  function logOut() {
    localStorage.clear();
  }

  return (
    <SidebarContainer>
      <SidebarTop>
        <SidebarLogo to="/savitarna">Flats.lt</SidebarLogo>
      </SidebarTop>
      <SidebarHr />
      <SidebarCenter>
        <SidebarList>
          <SidebarListItem to="/savitarna">
            <ProfileIcon />
            <SidebarNames>Profilis</SidebarNames>
          </SidebarListItem>
          <SidebarListItem to="/savitarna/objektai">
            <FlatsIcon />
            <SidebarNames>Objektai</SidebarNames>
          </SidebarListItem>
          <SidebarListItem to="/savitarna/sutartys">
            <AgreementsIcon />
            <SidebarNames>Sutartys</SidebarNames>
          </SidebarListItem>
          <SidebarListItem to="/savitarna/mokejimai">
            <PaymentsIcon />
            <SidebarNames>Sąskaitos</SidebarNames>
          </SidebarListItem>
          <SidebarListItem to="/savitarna/raktai">
            <LockIcon />
            <SidebarNames>Raktai</SidebarNames>
          </SidebarListItem>

          <SidebarListItem to="/savitarna/kontaktai">
            <ContactsIcon />
            <SidebarNames>Susisiekti</SidebarNames>
          </SidebarListItem>

          <SidebarListItem to="/" onClick={logOut}>
            <LogOutIcon />
            <SidebarNames>Atsijungti</SidebarNames>
          </SidebarListItem>
        </SidebarList>
      </SidebarCenter>
    </SidebarContainer>
  );
};

export default AppSidebar;
