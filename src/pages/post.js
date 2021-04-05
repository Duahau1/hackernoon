import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/navBar";
import HeroSection from "../components/HeroSection/herosection";
import Contents from "../components/Post/Content";
const Post = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState({
    background: "rgb(33,36,40)",
    color: "white",
  });
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleTheme = () => {
    console.log(theme);
    setTheme({
      background:
        theme.background != "rgb(33,36,40)" ? "rgb(33,36,40)" : "white",
      color: theme.color != "white" ? "white" : "black",
    });
  };

  return (
    <>
      <Navbar toggle={toggle} toggleTheme={toggleTheme} theme={theme} />
      <HeroSection style={theme} />
      <Contents />
      <Footer />
    </>
  );
};

export default Post;
