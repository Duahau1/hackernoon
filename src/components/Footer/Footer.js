import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement";

const Footer = () => {
  let footerContent = [
    "Help",
    "About",
    "Start Writing",
    "Sponsor",
    "Brand-as-Author",
    "Sitewide Billboard",
    "Ad by tag",
    "Newsletter",
    "Noonies",
    "Contact Us",
    "Terms",
    "Privacy",
    "Terms",
    "Cookies",
    "Stories published yesterday",
    "Leaderboard",
    "Contributors' Club",
    "Chrome Extension",
  ];

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            {footerContent.map((item) => (
                <FooterLink>{item}</FooterLink>
            ))}
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook fill="green"/>
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram fill="green" />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin fill="green"/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
