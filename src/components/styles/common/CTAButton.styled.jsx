import styled from "styled-components";


export const CTAButton = styled.a`
background: ${({primary,theme})=> primary ? theme.colors.green:
"none"};
color: ${({primary,theme})=> primary ? theme.colors.white:"none"};
padding: 10px 20px;
margin: ${({margin})=>margin};
border: 2px solid ${({ theme })=> theme.colors.green}; 
border-radius: 5px;
font-size: 22px;
font-family: "Poppins",sans-serif;
font-weight: 500;
cursor: pointer;
display: inline-block;

&:hover{
    background: ${({primary,theme})=> 
    primary ? theme.colors.orange:"none"};
    color: ${({primary,theme})=>
    primary ? theme.colors.white: theme.colors.orange};
    border: 2px solid  ${({ theme })=>theme.colors.orange};
}

`;