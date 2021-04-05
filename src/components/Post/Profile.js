import React, { useState } from "react";
import {
  UserProfileContainer,
  UserProfileAvatar,
  UserProfileParagraph,
} from "./PostElement";
import { FooterLink } from "../Footer/FooterElement";
import { FiGithub } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
const UserProfile = (props) => {
  return (
    <UserProfileContainer>
      <a href="https://hackernoon.com/u/codebucks" target="_blank">
        <UserProfileAvatar
          src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-842316b.jpeg"
          alt="CodeBucks Hacker Noon profile picture"
        />
      </a>
      <div style={{ marginTop: "1rem" }}>
        <FooterLink
          href="https://hackernoon.com/u/codebucks"
          target="_blank"
          style={{ marginLeft: "0rem", fontSize: "1rem", color: props.theme }}
        >
          @codebucks
        </FooterLink>
      </div>
      <UserProfileParagraph style={{ fontSize: "0.8rem", color: props.theme }}>
        CodeBucks
      </UserProfileParagraph>
      <UserProfileParagraph style={{ color: props.theme }}>
        Helping you to learn code! here you'll find tutorials around web
        development. Keep Coding...😜
      </UserProfileParagraph>
      <a
        href="https://twitter.com/code_bucks"
        target="_blank"
        style={{ marginRight: "0.5rem" }}
      >
        <FaTwitter fill="green" size={25} />
      </a>
      <a href="https://github.com/codebucks27" target="_blank">
        <FiGithub fill="green" size={25} stroke="green" strokeWidth="1" />
      </a>
    </UserProfileContainer>
  );
};

export default UserProfile;
