import React, { useEffect, useState } from "react";
import { BsSearch, BsSun } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavBarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  Logo,
  Searchbar,
  SearchContainer,
  SearchSymbol,
} from "./NavbarElements";
import { BsWatch } from "react-icons/bs";
import HnLogo from "../../images/hnlogo.png";
const Navbar = ({ toggle, toggleTheme, theme }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {scrollNav === false ? (
        <Nav scrollNav={scrollNav}>
          <NavBarContainer
            style={{
              flexDirection: "column",
              height: "auto",
            }}
          >
            <NavMenu
              style={{
                backgroundColor: "rgb(0, 187, 0)",
                padding: "1rem",
                margin: 0,
                justifyContent: "space-between",
              }}
            >
              <Logo src={HnLogo} />
              <div
                style={{
                  backgroundColor: "rgb(0, 187, 0)",
                  padding: "1rem",
                  margin: 0,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SearchContainer>
                  <Searchbar
                    name="searchvalue"
                    placeholder="Search..."
                    tabindex="1"
                  ></Searchbar>
                  <SearchSymbol>
                    {" "}
                    <BsSearch size={20} fill={"white"} />
                  </SearchSymbol>
                </SearchContainer>
                <NavButton>Starting Writing</NavButton>
                <NavButton style={{ border: "none" }}>Log in</NavButton>
                <div style={{ cursor: "pointer" }}>
                  {theme.color == "white" ? (
                    <FaRegMoon size={40} fill={"white"} onClick={toggleTheme} />
                  ) : (
                    <BsSun size={40} fill={"white"} onClick={toggleTheme} />
                  )}
                </div>
              </div>
            </NavMenu>
            <NavMenu
              style={{
                justifyContent: "center",
              }}
            >
              <NavItem>
                <NavLinks
                  to="/"
                  onClick={toggleHome}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Read
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Top Stories
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Write
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Listen
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Advertise
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Tech Company
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Carrers
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Slogging
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Help
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      ) : (
        <Nav scrollNav={scrollNav} style={{ justifyContent: "flex-start" }}>
          <NavMenu>
            <NavItem
              style={{
                fontWeight: "bold",
                fontSize: "1.8rem",
                display: "flex",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              <BsWatch />
              Step by Step Guide to Create 3 Different Types of Loading Screens
              in React by{" "}
              <a
                href="https://hackernoon.com/u/codebucks"
                target="_blank"
                style={{
                  boxShadow: "rgb(0 0 0 / 15%) 0px 0px 15px",
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "1rem",
                }}
              >
                @codebucks
              </a>
            </NavItem>
          </NavMenu>
        </Nav>
      )}
    </>
  );
};

export default Navbar;
