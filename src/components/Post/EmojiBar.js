import React, { useState } from "react";
import {
  Emojibox,
  EmojiButton,
  LikesDisplay,
  FloatingIcons,
  FloatingNumber,
} from "./EmojiElements";
import { Separator } from "./PostElement";
import { AiFillHeart } from "react-icons/ai";
import { AiFillBulb } from "react-icons/ai";
import { GiSailboat } from "react-icons/gi";
import { GiTwoCoins } from "react-icons/gi";

function EmojiBox(props) {
  const [heartState, setHeartState] = useState({
    fill: "#CDCDCD",
    transform: "none",
  });
  const [bulbState, setBulbState] = useState({
    fill: "#CDCDCD",
    transform: "none",
  });
  const [boatState, setBoatState] = useState({
    fill: "#CDCDCD",
    transform: "none",
  });
  const [coinState, setCoinState] = useState({
    fill: "#CDCDCD",
    transform: "none",
  });
  const [likes, setLikes] = useState(20);

  /*
  Hover effect for the four emojis
  */
  function toggleHover(icon) {
    if (icon === "heartState" && heartState.transform === "none") {
      setHeartState({
        fill: heartState.fill === "#CDCDCD" ? "#DC143C	" : "#CDCDCD",
        transform: "none",
      });
    } else if (icon === "bulbState" && bulbState.transform === "none") {
      setBulbState({
        fill: bulbState.fill === "#CDCDCD" ? "#F8D37E" : "#CDCDCD",
        transform: "none",
      });
    } else if (icon === "boatState" && boatState.transform === "none") {
      setBoatState({
        fill: boatState.fill === "#CDCDCD" ? "#1874CD	" : "#CDCDCD",
        transform: "none",
      });
    } else if (icon === "coinState" && coinState.transform === "none") {
      setCoinState({
        fill: coinState.fill === "#CDCDCD" ? "#FFBF00" : "#CDCDCD",
        transform: "none",
      });
    }
  }
  /*
  Click effect for the emoji
  */
  function increaseLikes(icon) {
    if (icon === "hearState") {
      if (heartState.transform == "none") {
        setLikes(likes + 1);
        setHeartState({
          fill: "#DC143C",
          transform: "scale(1.2)",
        });
      } else {
        setLikes(likes - 1);
        setHeartState({
          fill: "#DC143C",
          transform: "none",
        });
      }
    } else if (icon === "bulbState") {
      if (bulbState.transform == "none") {
        setLikes(likes + 1);
        setBulbState({
          fill: "#F8D37E",
          transform: "scale(1.2)",
        });
      } else {
        setLikes(likes - 1);
        setBulbState({
          fill: "#F8D37E",
          transform: "none",
        });
      }
    } else if (icon === "boatState") {
      if (boatState.transform == "none") {
        setLikes(likes + 1);
        setBoatState({
          fill: "#1874CD",
          transform: "scale(1.2)",
        });
      } else {
        setLikes(likes - 1);
        setBoatState({
          fill: "#1874CD",
          transform: "none",
        });
      }
    } else if (icon === "coinState") {
      if (coinState.transform == "none") {
        setLikes(likes + 1);
        setCoinState({
          fill: "#FFBF00",
          transform: "scale(1.2)",
        });
      } else {
        setLikes(likes - 1);
        setCoinState({
          fill: "#FFBF00",
          transform: "none",
        });
      }
    }
  }
  return (
    <Emojibox
      style={{
        visibility: props.blogPost == "false" ? "visible" : props.visibility,
      }}
    >
      {props.blogPost == "false" ? (
        <LikesDisplay>{likes}</LikesDisplay>
      ) : (
        <Separator
          style={{
            visibility: "visible",
            backgroundColor: likes === 24 ? "yellow" : "rgb(234, 234, 234)",
          }}
        />
      )}
      <EmojiButton onClick={() => increaseLikes("hearState")}>
        {props.blogPost == "false" ? (
          <FloatingIcons
            style={{
              display: heartState.transform === "none" ? "none" : "block",
            }}
          >
            <AiFillHeart fill="#DC143C" />
            <AiFillHeart fill="#DC143C" style={{ paddingTop: "0.2rem" }} />
            <AiFillHeart fill="#DC143C" style={{ paddingTop: "0.15rem" }} />
          </FloatingIcons>
        ) : (
          <FloatingNumber
            style={{
              display: heartState.transform === "none" ? "none" : "block",
            }}
          >
            1
          </FloatingNumber>
        )}
        <AiFillHeart
          style={heartState}
          onMouseEnter={() => toggleHover("heartState")}
          onMouseLeave={() => toggleHover("heartState")}
        />
      </EmojiButton>
      <EmojiButton onClick={() => increaseLikes("bulbState")}>
        {props.blogPost == "false" ? (
          <FloatingIcons
            style={{
              display: bulbState.transform === "none" ? "none" : "block",
            }}
          >
            <AiFillBulb fill="#F8D37E" />
            <AiFillBulb fill="#F8D37E" style={{ paddingTop: "0.2rem" }} />
            <AiFillBulb fill="#F8D37E" style={{ paddingTop: "0.15rem" }} />
          </FloatingIcons>
        ) : (
          <FloatingNumber
            style={{
              display: bulbState.transform === "none" ? "none" : "block",
            }}
          >
            1
          </FloatingNumber>
        )}
        <AiFillBulb
          style={bulbState}
          onMouseEnter={() => toggleHover("bulbState")}
          onMouseLeave={() => toggleHover("bulbState")}
        />
      </EmojiButton>
      <EmojiButton onClick={() => increaseLikes("boatState")}>
        {props.blogPost == "false" ? (
          <FloatingIcons
            style={{
              display: boatState.transform === "none" ? "none" : "block",
            }}
          >
            <GiSailboat fill="#1874CD" />
            <GiSailboat fill="#1874CD" style={{ paddingTop: "0.2rem" }} />
            <GiSailboat fill="#1874CD" style={{ paddingTop: "0.15rem" }} />
          </FloatingIcons>
        ) : (
          <FloatingNumber
            style={{
              display: boatState.transform === "none" ? "none" : "block",
            }}
          >
            1
          </FloatingNumber>
        )}
        <GiSailboat
          style={boatState}
          onMouseEnter={() => toggleHover("boatState")}
          onMouseLeave={() => toggleHover("boatState")}
        />
      </EmojiButton>
      <EmojiButton onClick={() => increaseLikes("coinState")}>
        {props.blogPost == "false" ? (
          <FloatingIcons
            style={{
              display: coinState.transform === "none" ? "none" : "block",
            }}
          >
            <GiTwoCoins fill="#FFBF00" />
            <GiTwoCoins fill="#FFBF00" style={{ paddingTop: "0.2rem" }} />
            <GiTwoCoins fill="#FFBF00" style={{ paddingTop: "0.15rem" }} />
          </FloatingIcons>
        ) : (
          <FloatingNumber
            style={{
              display: coinState.transform === "none" ? "none" : "block",
            }}
          >
            1
          </FloatingNumber>
        )}
        <GiTwoCoins
          style={coinState}
          onMouseEnter={() => toggleHover("coinState")}
          onMouseLeave={() => toggleHover("coinState")}
        />
      </EmojiButton>
    </Emojibox>
  );
}

export default EmojiBox;
