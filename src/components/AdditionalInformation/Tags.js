import React from "react";
import { TagSection, BadgesContainer, Badge } from "./InfoTableElement";
const Tags = () => {
  const TAGS = [
    `#react`,
    `#reactjs`,
    `#javascript`,
    `#web-development`,
    `#website-development`,
    `#loading-screen`,
    `#reactjs-loading`,
    `#webdev`,
    `#web-monetization`,
  ];
  return (
    <div>
      <TagSection>TAG</TagSection>
      <BadgesContainer>
        {TAGS.map((val) => (
          <Badge>{val}</Badge>
        ))}
      </BadgesContainer>
    </div>
  );
};
export default Tags;
