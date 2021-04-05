import React from "react";
import {
  EndProfileContainer,
  EndprofileBox,
  EndprofileParagraph,
} from "./InfoTableElement";
import { UserProfileAvatar, UserProfileParagraph } from "../Post/PostElement";
import {
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
} from "../Footer/FooterElement";
import {
  FaUserAstronaut,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const EndProfile = () => {
  return (
    <EndProfileContainer>
      <SocialMedia style={{ marginBottom: "1rem" }}>
        <SocialMediaWrap>
          <SocialIcons>
            <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>
              Share this story
            </span>
            <SocialIconLink
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook fill="green" />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaTwitter fill="green" />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin fill="green" />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="Linkedin"
            >
              <AiFillMail fill="green" />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
      <EndprofileBox>
        <div>
          <a href="https://hackernoon.com/u/codebucks" target="_blank">
            <UserProfileAvatar
              src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-842316b.jpeg"
              alt="CodeBucks Hacker Noon profile picture"
            />
          </a>
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <FooterLink
              href="https://hackernoon.com/u/codebucks"
              target="_blank"
              style={{ marginLeft: "0rem", fontSize: "1.6rem" }}
            >
              @codebucks
            </FooterLink>
          </div>
          <UserProfileParagraph style={{ fontSize: "1.6rem" }}>
            CodeBucks
          </UserProfileParagraph>
        </div>
        <EndprofileParagraph>
          <FaUserAstronaut /> Subscribe to Learn ReactJS by building!
        </EndprofileParagraph>
      </EndprofileBox>
    </EndProfileContainer>
  );
};
export default EndProfile;
