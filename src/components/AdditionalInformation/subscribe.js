import React from "react";
import {
  SubscribeContainer,
  SubscriberButton,
  SubscribeText,
} from "./InfoTableElement";
import { BiGlassesAlt } from "react-icons/bi";
const Subscribe = (props) => {
  return (
    <SubscribeContainer>
      <SubscriberButton>
        <a
          href="https://app.hackernoon.com/signup"
          style={{ textDecoration: "none", color: props.theme }}
        >
          Join Hacker Noon
        </a>
        <BiGlassesAlt style={{ marginLeft: "0.3rem" }} fill={props.theme} />
      </SubscriberButton>
      <SubscribeText>
        Create your free account to unlock your custom reading experience.
      </SubscribeText>
    </SubscribeContainer>
  );
};
export default Subscribe;
