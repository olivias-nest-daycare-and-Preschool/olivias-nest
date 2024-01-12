
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
background: ${({ theme })=> theme.colors.lightNavyBlue};
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
    rgba(255,255,255,1) 100%
);
`;

export const LineTwo = styled.div`
width: 30px;
height: 3px;
margin: 5px 0;
background: linear-gradient(
    135deg,
    rgba(249,105,14,1) 0%,
    rgba(255,255,255,1) 100%
);
`;

export const LineThree = styled.div`
width: 15px;
height: 3px;
margin: 5px 0;
margin-left: 15px;
background: linear-gradient(
    135deg,
    rgba(249,105,14,1) 0%,
    rgba(255,255,255,1) 100%
);
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
    right:0;
    padding-top:3rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 998;
}
`;