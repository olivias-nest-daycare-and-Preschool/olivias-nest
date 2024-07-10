import styled from "styled-components";


export const CTAButton = styled.a`
background: ${({primary,theme})=> primary ? theme.colors.orange:
"none"};
color: ${({primary,theme})=> primary ? theme.colors.white:"none"};
padding: 10px 20px;
margin: ${({margin})=>margin};
border: 2px solid ${({ theme })=> theme.colors.orange}; 
/* border-radius: 5px; */
font-size: 18px;
font-family: "Roboto Slab",monospace;
font-weight: 700;
border-radius: 20px;
cursor: pointer;
display: inline-block;
margin-right: 40px;

&:hover{
    background: ${({primary,theme})=> 
    primary ? theme.colors.orange:"none"};
    color: ${({primary,theme})=>
    primary ? theme.colors.white: theme.colors.orange};
    border: 2px solid  ${({ theme })=>theme.colors.orange};
}
 @media (max-width: ${({theme})=>theme.mobile}){
  margin: 10px 10px; //adjust cta buttons
  font-size: 1.1rem;
  }

`;