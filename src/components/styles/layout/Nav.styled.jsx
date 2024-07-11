import { styled, keyframes, css } from "styled-components";

const NavItemFade = keyframes`
  from {
    opacity: 0;
    transform: translate(50px);
  }
  to {
    opacity: 1;
    transform: translate(0px);
  }
`;

const navItemAnimation = ({ index }) => css`
  animation: ${NavItemFade} 0.5s ease forwards ${index / 7 + 0.5}s;
`;

export const Nav = styled.nav`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  margin-top: 3.5rem;
  z-index: 98;
  transition: all 1s ease-in-out;
  background: black;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: space-between;
  }
  color: ${({ theme }) => theme.colors.white};
  top: ${({ scrollDirection }) =>
    scrollDirection === "down" ? "-80px" : "40px"};
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  /* border-radius: 50%; */
  /* background: red; */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100px;
    object-fit: cover;
    height: 100px;
  }
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  background: ${({ theme, menuopen }) =>
    menuopen ? "none" : theme.colors.lightNavyBlue};
  transition: ${({ theme }) => theme.transition};
  padding: 0.7rem;
  border-radius: 5px;
  display: none;
  position: absolute;
  right: 20px;
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
  }
`;

export const LineOne = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(135deg, rgba(249, 105, 14, 1) 0%, #80e109 100%);
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuopen }) =>
    menuopen ? "rotate(-45deg) translate(-5px,6px) scaleX(2)" : "none"};
`;

export const LineTwo = styled.div`
  width: 30px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(135deg, rgba(249, 105, 14, 1) 0%, #80e109 100%);
  opacity: ${({ menuopen }) => (menuopen ? 0 : 1)};
  transition: ${({ theme }) => theme.transition};
`;

export const LineThree = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  margin-left: ${({ menuopen }) => (menuopen ? 0 : "15px")};
  background: linear-gradient(135deg, rgba(249, 105, 14, 1) 0%, #80e109 100%);
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuopen }) =>
    menuopen ? "rotate(45deg) translate(-5px,-6px) scaleX(2)" : "none"};
`;

export const NavList = styled.ul`
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  font-size: 18px;
  overflow: hidden;
  font-weight: 700;
  flex-wrap: wrap;
  // background: red;
  // position: relative;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 24rem;
    height: 100vh;
    background: ${({ theme }) => theme.colors.lightNavyBlue};
    position: fixed;
    top: 0;
    flex-wrap: nowrap;
    right: ${({ menuopen }) => (menuopen ? "0" : "-24rem")};
    padding-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;
    overflow-y: scroll;
    z-index: 998;
    transition: ${({ theme }) => theme.transition};
  }
`;
export const NavItem = styled.li`
  padding: 1rem 5px;
  margin-left: .5rem;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;
    margin: 0rem;
    ${({ menuopen }) => (menuopen ? navItemAnimation : null)};

    &:hover > ul {
      display: block; /* Show submenu on hover for mobile */
    }
  }

  &:hover > ul {
    display: block;
  }
`;

export const SubMenu = styled.ul`
  display: none;
  position: absolute;
  top: 70%;
  left: 55%;
  transition : .5s ease-in-out;
  background: ${({ theme }) => theme.colors.lightNavyBlue};
  padding: 1rem;
  border-radius: 5px;
  z-index: 999;
  

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: static;
    background: none;
    padding: 0;
    border-radius: 0;
    display: none; /* Hide submenu by default on mobile */
    margin-top: 1rem;
    transition: ${({ theme }) => theme.transition};

    ${NavItem}:hover & {
      display: block; /* Show submenu on parent hover for mobile */
    }

    ${NavItem}:hover & li {
      opacity: 1;
    }
  }
`;

export const SubMenuItem = styled.li`
  margin: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.orange};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0.5rem 1rem;
    opacity: 0; /* Hide submenu items by default on mobile */
    transition: ${({ theme }) => theme.transition};
  }

  ${NavItem}:hover & {
    opacity: 1; /* Show submenu items on parent hover for mobile */
  }
`;

export const NavLink = styled.a`
  text-transform: uppercase;
  /* color: ${({ theme }) => theme.colors.white}; */
  letter-spacing: 1.5px;
  position: relative;


  &:hover {
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: "";
    display: block;
    height: 3px;
    width: 0%;
    background: ${({ theme }) => theme.colors.orange};
    transition: all ease-in-out 300ms;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  ${({ isSubMenu }) =>
    isSubMenu &&
    css`
      &:hover::after {
        width: 0;
      }
    `}
`;

export const Profile = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 9rem;
      width: auto;
      border-radius: 50%;
      display: block;
      margin: 1.5rem 0;
    }
  }
`;

export const SocialIcons = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      margin: 0 0.5rem;
      font-size: 2rem;
    }
  }
`;



