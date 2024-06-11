import {styled,keyframes,css}from "styled-components";


const NavItemFade = keyframes`
from{
    opacity: 0;
    transform: translate(50px);
}
to{
    opacity:1;
    transform: translate(0px);
}
`;

const navItemAnimation = ({index}) => css`
animation: ${NavItemFade} 0.5s ease forwards ${index /7 + 0.5}s;
`;




export const NewsSection = styled.section`
min-height: 20vh;
padding: 10rem 0 5rem 0;
width: 100%;
`;

export const AdvertSection = styled.section`
min-height: 90vh;
padding: 10rem 0 5rem 0;
width: 100%;
background-color: #172332;
@media(max-width: ${({theme})=> theme.mobile}){
  min-height: 150vh;
}
`;

export const AdvertMenu = styled.div`
  min-height: 30vh;
  padding: 10rem 0 5rem 0;
  width: 80%;
  border-radius: 40px;
  transform: translateY(-50px); /* Move the AdvertMenu up by 50px */
  margin: 0 auto; /* Center the AdvertMenu */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  @media(max-width: ${({theme})=> theme.mobile}){
    min-height: 50vh;
  }
`;

export const AdvertSectioning = styled.div`
  min-height: 70vh;
  padding: 10rem 0 5rem 0;
  width: 80%;
  border-radius: 10px;
  transform: translateY(-50px); /* Move the AdvertMenu up by 50px */
  margin: 0 auto; /* Center the AdvertMenu */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: ${({theme})=> theme.mobile}){
    min-height: 120vh;
  }
`;

export const ImageCard = styled.div`
  flex: 0 1 30%; /* Each card takes up 30% of the available space */
  margin: 1rem;
  padding: 1rem;
  background-color: #030f20;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  position: relative; /* Ensure the card is a positioned container */
`;

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover; /* Preserve aspect ratio and fill the container */
border-radius: 20px;
`;

export const Header = styled.h1`
  margin-bottom: 2rem; /* Add some space below the header */
  text-align: center; /* Center the header text */
`;

export const ImageCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media(max-width: ${({theme})=> theme.mobile}){
    flex-direction: column;
  }
`;


export const NewsNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center; // Change this to center the items
  font-size: 23px;
  font-weight: 700;
  flex-wrap: nowrap;
  width: 100%; // Ensure the NavList takes the full width

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 24rem;
    height: 120vh;
    background: ${({ theme }) => theme.colors.lightNavyBlue};
    position: fixed;
    top: 0;
    right: ${({ menuOpen }) => (menuOpen ? '0' : '-24rem')};
    padding-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 998;
    transition: ${({ theme }) => theme.transition};
  }
`;

export const NewsNavItem = styled.li`
 margin: 1rem 3rem;
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;
    margin: 1.2rem 0;
    ${({ menuOpen }) => (menuOpen ? navItemAnimation : null)};
  }
`;



export const NewsNav = styled.nav`
  height: 350px;
  width: 100%;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: center; // Change this to center the items
  position: fixed;
  z-index: 98;
  transition: all 1s ease-in-out;
  background: rgba(11, 11, 11, 0.6);
  color: ${({ theme }) => theme.colors.white};
  top: ${({ scrollDirection }) => (scrollDirection === 'down' ? '-80px' : '40px')};
  margin-top: -10rem;
  @media(max-width: ${({theme})=> theme.mobile}){
    flex-direction: column;
    height: 500px;
  }
`;


export const ArrowUp = styled.a`
  display: block;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #082736;
  color: white;
  padding: 10px;
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
  z-index: 999;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0b0f13;
  }
`;

