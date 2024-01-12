
import styled from "styled-components";


export const Nav = styled.nav`
    height: 80px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 98;
    transition: all 1s ease-in-out;
    background: rgba(2,12,27,0.8);
    color: ${({theme})=>theme.colors.white};
`;


export const Logo = styled.img`
width: 100px;
border-radius: 50%;
`;


export const MenuIcon = styled.div`
cursor: pointer;
background: ${({ theme,menuopen})=> menuopen ? "none":theme.colors.lightNavyBlue};
transition:${({theme})=> theme.transition};
padding: 0.7rem;
border-radius: 5px;
display: none;
position: absolute;
right: 20px;
z-index: 999;

@media(max-width:${({ theme })=> theme.mobile}){
    display: inline-block;
}
`;

export const LineOne = styled.div`
width: 15px;
height: 3px;
margin: 5px 0;
background: linear-gradient(
    135deg,
    rgba(249,105,14,1) 0%,
    #80e109 100%
);
transition: ${({theme})=>theme.transition};
transform: ${({menuopen})=>menuopen ? "rotate(-45deg) translate(-5px,6px) scaleX(2)":"none"};
`;

export const LineTwo = styled.div`
width: 30px;
height: 3px;
margin: 5px 0;
background: linear-gradient(
    135deg,
    rgba(249,105,14,1) 0%,
    #80e109 100%
);
opacity: ${({menuopen}) => menuopen ? 0 :1};
transition: ${({theme})=>theme.transition};
`;

export const LineThree = styled.div`
width: 15px;
height: 3px;
margin: 5px 0;
margin-left: ${({menuopen})=> menuopen?0:"15px"};
background: linear-gradient(
    135deg,
    rgba(249,105,14,1) 0%,
    #80e109 100%
);
transition: ${({theme})=>theme.transition};
transform: ${({menuopen})=>menuopen ? "rotate(45deg) translate(-5px,-6px) scaleX(2)":"none"};
`;

export const NavList = styled.ul`
display: flex;
align-items: center;
justify-content:flex-end;
font-size: 14px;
flex-wrap: wrap;

@media(max-width: ${({ theme })=> theme.mobile}){
    width:24rem;
    height: 100vh;
    background: ${({ theme })=> theme.colors.lightNavyBlue};
    position: fixed;
    top: 0;
    right: ${({menuopen}) => menuopen ? "0": "-24rem"};
    padding-top:3rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 998;
    transition: ${({theme})=> theme.transition};
}
`;


export const NavItem = styled.li`
margin: 0.2rem 0.7rem;

&:last-child {
    margin-right: 0;
}
`;

export const NavLink = styled.a`
text-transform: uppercase;
color: ${({theme})=> theme.colors.white};
letter-spacing: 1.5px;

&::after{
    content:"";
    display: block;
    height: 3px;
    width: 100%;
    background: ${({theme})=> theme.colors.orange};
    transition: all ease-in-out 300ms;
}
`;