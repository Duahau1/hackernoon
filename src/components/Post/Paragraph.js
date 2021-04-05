import React, { useState, useEffect } from "react";
import { ParagraphContainer, Separator, WordLine } from "./PostElement";
import EmojiBar from "./EmojiBar";
const Paragraph = (props) => {
  const [emojiVisibility, setEmojiVisibility] = useState("hidden");
  const [dimension, setDimension] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimension(window.innerWidth);
    });
  }, []);

  function toggleHover() {
    setEmojiVisibility(emojiVisibility == "hidden" ? "visible" : "hidden");
  }
  return (
    <>
      <ParagraphContainer onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <WordLine>{props.children}</WordLine>
        {dimension > 1000 ? (
          <EmojiBar blogPost="true" visibility={emojiVisibility} />
        ) : (
          <span />
        )}
      </ParagraphContainer>
    </>
  );
};

export default Paragraph;
