import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    !scrollNav ? "rgb(0, 59, 0)" : "rgb(0, 187, 0)"};
  height: auto;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 3s all ease;
  @media screen and (max-width: 960px) {
    transition: 2s all ease;
  }
`;
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #932108;
  }
`;
export const Img = styled.img``;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 80px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 1.5rem;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #932108;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;

export const PageNavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #932108;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;
export const Logo = styled.img`
  width: 248px;
  aspect-ratio: auto 248 / 40;
  height: 40px;
`;
export const SearchContainer = styled.form`
  position: relative;
  margin-right: 1rem;
`;
export const Searchbar = styled.input`
  background: rgb(0, 59, 0);
  border: none;
  padding: 10px 20px 10px 10px;
  border-radius: 2px;
  font-size: 1.6rem;
  font-weight: bold;
  transition: all 120ms ease-in-out 0s;
  outline-color: rgb(0, 187, 0);
  color: rgb(0, 255, 0);
`;
export const SearchSymbol = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  width: 19px;
  transform: translate(0px, -50%);
  cursor: pointer;
`;
export const NavButton = styled.div`
  padding: 1rem;
  border: 3px solid white;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
  font-weight: bold;
  :hover {
    opacity: 0.8;
  }
`;
