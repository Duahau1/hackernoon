import React from "react";
import {
  SubscribeContainer,
  SubscriberButton,
  SubscribeText,
} from "./InfoTableElement";
import { BiGlassesAlt } from "react-icons/bi";
const Subscribe = () => {
  return (
    <SubscribeContainer>
      <SubscriberButton>
        <a
          href="https://app.hackernoon.com/signup"
          style={{ textDecoration: "none", color: "white" }}
        >
          Join Hacker Noon
        </a>
        <BiGlassesAlt style={{ marginLeft: "0.3rem" }} />
      </SubscriberButton>
      <SubscribeText>
        Create your free account to unlock your custom reading experience.
      </SubscribeText>
    </SubscribeContainer>
  );
};
export default Subscribe;
