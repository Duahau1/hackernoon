import React, { useState } from "react";
import EmojiBox from "../Post/EmojiBar";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP1,
  HeroP2,
  HeroSubHeader,
  HeroStarBox,
  LandingImages,
} from "./HeroElement";
import { AiFillStar } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const SUFFIX = ["st", "nd", "rd", "th"];

function HeroSection() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroH1>
          Step by Step Guide to Create 3 Different Types of Loading Screens in
          React
        </HeroH1>
        <HeroSubHeader>
          <HeroP1>
            {`${MONTHS[new Date().getMonth()]} ${
              new Date().getDate() +
              "" +
              SUFFIX[
                new Date().getDate() % 10 > 3 ? 3 : new Date().getDate() % 10
              ]
            } ${new Date().getFullYear()}`}
          </HeroP1>
          <HeroStarBox>
            <AiFillStar style={{ backgroundColor: `transparent` }} />
            <span
              style={{
                marginLeft: 0.5 + "rem",
                backgroundColor: `transparent`,
              }}
            >
              876 reads
            </span>
          </HeroStarBox>
          <HeroP2>
            <FaRegBookmark />
          </HeroP2>
        </HeroSubHeader>
        <HeroSubHeader>
          <EmojiBox blogPost="false" />
        </HeroSubHeader>
        <HeroSubHeader>
          <LandingImages
            alt="landingpic"
            src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-g6aq337h.jpeg"
          ></LandingImages>
        </HeroSubHeader>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
