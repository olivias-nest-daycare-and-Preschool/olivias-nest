import {styled,keyframes} from "styled-components"

const rotate = keyframes `
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;

export const StyledAboutSection = styled.section`
min-height: 90vh;
width: 100%;
display: flex;
align-items: flex-start;
justify-content: space-between;
padding: 10rem 0 5rem 0;

@media(max-width:${({theme})=> theme.mobile}){
    flex-direction: column;
    align-items: flex-start;
}
`;


export const ImageContainer = styled.div`
height: 20rem;
width: 20rem;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-right: 2.5rem;
position: relative;

@media(max-width:${({theme})=>theme.mobile}){
    margin-bottom: 4rem;
}
`;

export const StyledImage = styled.img`
height: 12rem;
width: 12rem;
border-radius: 50%;
position: absolute;
z-index: 4;
`;

export const GradCircle = styled.div`
height: 100%;
width: 100%;
border-radius: 50%;
position: absolute;
z-index: 2;
background: linear-gradient(
    to right, 
    ${({theme})=> theme.colors.orange} 0%,
    ${({theme})=> theme.colors.orange} 50%,
    ${({theme})=> theme.colors.orange} 100%,
);
`;
export const DullCircle = styled.div`
height: 12.5rem;
width: 12.5rem;
border-radius: 50%;
position: absolute;
z-index: 3;
background: ${({theme})=> theme.colors.navyBlue};
`;


export const AboutContent = styled.div`
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0;
p{
    font-family: "Poppins",sans-serif;
    font-size: 1.9rem;
    text-align: justify;
    margin-bottom: 1.4rem;
}
@media(max-width:${({theme})=>theme.mobile}){
   p{
    font-size: 1.9rem;
   }
}
` ;


export const StyledHeading = styled.div`
font-size: 3rem;
margin-bottom: 20px;
color: ${({theme})=> theme.colors.orange};
`;

export const HeroSocialIcons = styled.div `
position:fixed;
right: 20px;

@media (max-width: ${({ theme })=> theme.mobile}){
    bottom: 50px;
}
`;

export const SocialIcon =styled.a `
height: 3rem;
width: 3rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
background-color: rgba(249,105,14,0.1);
cursor: pointer;
font-size: 14px;
margin-bottom: 10px;

svg{ 
    color: rgba(249,105,14);
    transition: ${({ theme }) => theme.transition};
}
&:hover{
    svg{
    animation: ${rotate} 1.5s linear infinite;
    ${({ theme }) => theme.colors.white};
    }
}
@media(max-width: ${({ theme })=>theme.mobile}){
    height: 2.2rem;
    width: 2.2rem;
}
`;


export const AboutUsSection = styled.section`
min-height: 60vh;
padding: 10rem 0 5rem 0;
width: 100%;
`;