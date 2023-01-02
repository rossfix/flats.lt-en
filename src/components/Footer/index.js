import React from "react";
import { animateScroll as scroll } from "react-scroll";
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
  FooterParLeft
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterColumnsContainer>
        <FooterLinksContainer>
          <FooterLinkItems>
            <FooterLinkTitle to="/" onClick={toggleHome}>
              Flats.lt
            </FooterLinkTitle>
            <FooterParLeft>
              Flats.lt sprendžia visus jums rūpimus NT nuomos administravimo
              klausimus. Susisiekite su mumis del savo problemos ir mes ją
              išspręsime!
            </FooterParLeft>

            <FooterLink to="/straipsniai">Straipsniai</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>Kontaktai</FooterLinkTitle>
            <FooterPar>El. paštas: flats.lithuania@gmail.com</FooterPar>
            <FooterLink to="/kontaktu-forma">Susisiekti</FooterLink>
            <FooterLinkTitle>Savitarna</FooterLinkTitle>
            <FooterLink to="/savitarna/profilis">Prisijungti</FooterLink>
          </FooterLinkItems>
        </FooterLinksContainer>
      </FooterColumnsContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>© Flats.lt {new Date().getFullYear()}</WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
