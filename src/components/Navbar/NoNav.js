import React from "react";

import {
  NoNav,
  NoNavbarContainer,
  NavLogo,
  NoNavBtn,
  NavBtnLink
} from "../Navbar/NavbarElements";

const StationarNav = () => {
  return (
    <>
      <NoNav>
        <NoNavbarContainer>
          <NavLogo to="/">Flats.lt</NavLogo>
          <NoNavBtn>
            <NavBtnLink to="/">Home</NavBtnLink>
          </NoNavBtn>
        </NoNavbarContainer>
      </NoNav>
    </>
  );
};

export default StationarNav;
