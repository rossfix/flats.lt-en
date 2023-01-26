import React from "react";

import { useNavigate } from "react-router-dom";
import {
  FooterColumnsContainer,
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  FooterPar,
  FooterParLeft,
  FooterBtnDinamic,
  LanguageWrap,
  LanguageSite,
  LanguageSeparator,
  FooterTitle,
} from "./FooterElements";

const Footer = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/login";
    navigate(path);
  };

  return (
    <FooterContainer>
      <FooterColumnsContainer>
        <FooterLinksContainer>
          <FooterLinkItems>
            <FooterLinkTitle href="/">Property management</FooterLinkTitle>
            <FooterParLeft>
              Flats.lt solves all your property management concerns in
              Lithuania. Contact us with your problem and we will solve it!
            </FooterParLeft>

            <FooterLink to="/articles">Articles</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterTitle>Contacts</FooterTitle>
            <FooterPar>E-mail: flats.lithuania@gmail.com</FooterPar>
            <FooterLink to="/contacts-form">Contact us</FooterLink>
            <FooterTitle>Self service</FooterTitle>
            <FooterBtnDinamic onClick={routeChange}>Log in</FooterBtnDinamic>
          </FooterLinkItems>
        </FooterLinksContainer>
      </FooterColumnsContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <LanguageWrap>
            <WebsiteRights>Language: </WebsiteRights>
            <LanguageSite href="https://flats.lt">Lithuanian</LanguageSite>
            <LanguageSeparator> | </LanguageSeparator>
            <LanguageSite href="https://en.flats.lt/">English</LanguageSite>
          </LanguageWrap>
          <WebsiteRights>© Flats.lt {new Date().getFullYear()}</WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
