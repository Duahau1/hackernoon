import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: rgb(60, 60, 59) !important;
`;

export const FooterWrap = styled.div`
  padding: 1rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const FooterLink = styled.a`
  color: rgb(246, 247, 249);
  text-decoration: none;
  margin-left: 1.2rem;
  margin-bottom: 0.5rem;
  padding: 0 0.2rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-image: linear-gradient(
    transparent 0%,
    transparent calc(50% - 9px),
    rgba(0, 255, 0, 0.35) calc(50% - 9px),
    rgba(0, 255, 0, 0.35) 100%
  );
  transition: all 120ms ease-in-out 0s;
  background-size: 100% 200%;
  background-position: 0px 0px;
  &:hover {
    background-image: linear-gradient(
      transparent 0%,
      transparent calc(50% - 9px),
      rgba(0, 255, 0, 0.9) calc(50% - 9px),
      rgba(0, 255, 0, 0.9) 100%
    );
    background-size: cover;
    transition: all 120ms ease-in-out 0s;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
  align-items: flex-start;
  @media screen and (max-width: 820px) {
    flex-direction: row;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-right: 2rem;
`;
