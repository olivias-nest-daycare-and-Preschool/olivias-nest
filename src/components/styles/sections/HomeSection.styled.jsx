import styled from "styled-components";

export const StyledHomeSection = styled.section`
 width: 100%;
 height: 90vh;
 position: relative;
 display: flex;
 align-items: center;
 justify-content: flex-start;
 text-align: center;
 margin-top: 40px;
 margin-right: 10rem;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 3rem;
    justify-content: flex-start;
    
    img {
      width: 80%;
      border-radius: 9px;
      margin-bottom: 2rem;
    }
  }
`;
export const StyledHomeContent = styled.div`
width: 100%;
max-width:58rem;
color: ${({theme})=>theme.colors.white};
text-transform: uppercase;
h1{
    letter-spacing: 1.2rem;
    font-size: 2rem;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    width: 39ch;
    margin: auto;
    border-right: 4px solid rgba(255,255,255,1);
}
h3{
    font-size: 4rem;
    margin: 1.5rem 0;
    background: linear-gradient(
        to right,
        ${({theme})=>theme.colors.orange} 0%,
        ${({theme})=>theme.colors.purple} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
p{
    font-size: 1.7rem;
    font-weight: 400;
    text-transform: none;
}
div{
    margin: 2.5rem 0;
}
@media (max-width: ${({theme})=>theme.mobile}){
    h1{
        letter-spacing: 1rem;
        font-size: 1.5rem;
        width: 40ch;
    }
    h3{
        font-size: 2.2rem;
    }
    p{
        font-size: 1.3rem;
    }
}

`;

export const HomeImageStyled = styled.div`
  display:flex;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  position: relative;
  perspective: 1000px;
  margin-right: 0; /* Changed from 4rem to 0 */
  margin-left: auto; /* Added to push to the right edge */
  z-index: 4;
`;
export const HomeSectionImageStyled = styled.div`
img {
    width: 70%;
    margin-top: 15rem;
    margin-right: 5rem;
    border-radius: 20px;
    z-index: 3;
  }
`;

export const WordingsStyled = styled.div`
  width: 40%;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const BaitSection = styled.section`
  min-height: 90vh;
  padding: 10rem 0 5rem 0;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: left;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Bait2Section = styled.div`
min-height: 40vh;
padding: 10rem 0 5rem 0;
width: 100%;
display: flex;
align-items: start;
justify-content: left;
@media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem; /* Reduce vertical space between items */
  margin-top: 20rem;
  transition: all 300ms ease-in-out;
  &:hover{
    transform: translateY(-1rem);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 3rem;
  }
`;

export const FeatureImage = styled.img`
  height: auto;
  width: 13rem;
  border-radius: 50%;
  margin-right: 1.5rem; /* Space between image and text */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 1rem; /* Space between image and text on mobile */
  }
`;

export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 1rem;
  width: 100%;
  font-family: 'Poppins', sans-serif; /* Set font-family to Poppins */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: flex-start; /* Align text to the left on mobile */
  }
`;

export const FeatureTitle = styled.h3`
  margin: 0; /* Remove default margin */
  display: flex;
  align-items: center;
  text-align: left; /* Align text to the left */
  font-size:2rem;
`;

export const FeatureDescription = styled.p`
  margin-top: 0.5rem; /* Adjust spacing between title and description */
  font-size: 1.5rem;
  color: rgba(255,255,255,0.7);
`;

export const BlockQuote = styled.blockquote`
 font-style: italic;
  margin: 20px;
  padding: 10px 20px;
  border-left: 5px solid #ccc;
  color: white;
  /* background-color: #f9f9f9; */
  position: relative;
  quotes: "“" "”" "‘" "’";
  
  &::before {
    content: open-quote;
    font-size: 4rem;
    line-height: 0;
    position: absolute;
    left: 10px;
    top: -10px;
    color: #ccc;
  }

  &::after {
    content: close-quote;
    font-size: 4rem;
    line-height: 0;
    position: absolute;
    right: 10px;
    bottom: -10px;
    color: #ccc;
  }
`;

export const Cite = styled.cite`
 display: block;
  text-align: right;
  margin-top: 10px;
  font-style: normal;
  color: #777;
`;

export const SomeDataSection = styled.section`
min-height: 90vh;
width: 100%;
position: relative;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 50%;
  padding: 1.2rem;
  background-color: rgba(0, 0, 0, 0.0);
  /* height: 500px; //newly-incorporated */
  border-radius: 20px;
  transition: all 300ms ease-in-out;
  margin-bottom: 1rem;
  &.scrolled {
    transform: translateY(-1rem);
  }
  &:hover{
    transform: translateY(-1rem);
  }
 @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
    margin-bottom: 1rem;
    /* height: 600px; */
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 10px;
`;

export const CardContent = styled.div`
  margin-top: 1rem;
  margin-top: 2rem; /* Increase space between cards */
  margin-left: 1rem; /* Pull left margin */
  margin-right: 1rem; /* Pull right margin */
`;

export const CardTitle = styled.h1`
  font-size: 2.7rem;
  font-weight:200;
  margin-bottom: 0.5rem;
  font-family: "Poetsen One",sans-serif;
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 2rem;
  }
`;

export const CardText = styled.p`
  margin-top: 0rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-family: "Poppins",sans-serif;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.2rem;
  }
`;

export const CardButton = styled.a`
  display: inline-block;
  margin-right: 18px;
  padding: 0.5rem 1rem;
  background-color: ${({theme})=> theme.colors.orange};
  color: black;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 20px;
  font-size: 2rem;
  font-family: "Poppins",sans-serif;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.1rem;
    padding: 0.5rem 0.8rem;
  }
`;




export const Header = styled.header`
background-color: #333;
color: white;
padding: 20px 0; 
text-align: center;
`;

export const Main = styled.main`
padding: 20px 0;
text-align: center;
`;

export const Footer = styled.footer`
background-color: #333;
color: white;
padding: 20px 0;
text-align: center;
`;


// export const HeroContent = styled.div`
//   width: 100%;
//   max-width: 58rem;
//   color: ${({ theme }) => theme.colors.white};
//   text-transform: uppercase;
//   transition: all 300ms ease-in-out;
//   &:hover {
//     transform: translateY(-1rem);
//   }

//   h1 {
//     letter-spacing: 0.5rem;
//     font-size: 3rem;
//     font-weight: 900;
//     overflow: hidden;
//     white-space: nowrap; // Prevent wrapping on larger screens
//     width: 54ch;
//     margin: auto;
//   }

//   h3 {
//     font-size: 4rem;
//     margin: 1.5rem 0;
//     background: linear-gradient(
//       to right,
//       ${({ theme }) => theme.colors.orange} 0%,
//       ${({ theme }) => theme.colors.purple} 100%
//     );
//     background-clip: text;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     margin: 3rem 0;
//     white-space: nowrap; // Prevent wrapping on larger screens
//   }

//   p {
//     font-size: 2rem;
//     font-weight: 400;
//     text-transform: none;
//     margin: 3rem 0;
//     white-space: nowrap; // Prevent wrapping on larger screens
//   }

//   div {
//     margin: 3rem 0;

//     p {
//       font-style: italic;
//       white-space: nowrap; // Prevent wrapping on larger screens
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     h1 {
//       letter-spacing: 0.8rem;
//       font-size: 1.5rem;
//       width: 100%; // Use full width for wrapping
//       white-space: normal; // Allow text to wrap on mobile
//       word-wrap: break-word; // Ensure text wraps on mobile
//     }
//     h3 {
//       font-size: 2.1rem;
//       white-space: normal; // Allow text to wrap on mobile
//       word-wrap: break-word; // Ensure text wraps on mobile
//     }
//     p {
//       font-size: 1.2rem;
//       white-space: normal; // Allow text to wrap on mobile
//       word-wrap: break-word; // Ensure text wraps on mobile
//     }
//     div p {
//       white-space: normal; // Allow text to wrap on mobile
//       word-wrap: break-word; // Ensure text wraps on mobile
//     }
//   }
// `;

export const HeroContent = styled.div `
width: 100%;
max-width:58rem;
color: ${({theme})=>theme.colors.white};
text-transform: uppercase;
transition: all 300ms ease-in-out;
  &:hover{
    transform: translateY(-1rem);
  }

h1{
    letter-spacing: 0.5rem;
    font-size: 3rem;
    font-weight: 900;
    overflow: hidden;
    white-space: nowrap;
    width: 54ch;
    margin: auto;
}
h3{
    font-size: 4rem;
    margin: 1.5rem 0;
    background: linear-gradient(
        to right,
        ${({theme})=>theme.colors.orange} 0%,
        ${({theme})=>theme.colors.purple} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 3rem 0;
}
p{
    font-size: 2rem;
    font-weight: 400;
    text-transform: none;
    margin: 3rem 0;
}
div{
    margin: 3rem 0;
    p{
      font-style: italic;
    }
}
/* @media (max-width: ${({theme})=>theme.mobile}){
    h1{
        letter-spacing: 0.8rem;
        font-size: 1.5rem;
        width: 45ch;
    }
    h3{
        font-size: 2.1rem;
    }
    p{
        font-size: 1.2rem;
    }
} */
@media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
     letter-spacing: 0.8rem;
      font-size: 1.5rem;
       width: 100%; // Use full width for wrapping
       white-space: normal; // Allow text to wrap on mobile
       word-wrap: break-word; // Ensure text wraps on mobile
     }
     h3 {
       font-size: 2.1rem;
       white-space: normal; // Allow text to wrap on mobile
       word-wrap: break-word; // Ensure text wraps on mobile
     }
     p {
       font-size: 1.2rem;
       white-space: normal; // Allow text to wrap on mobile
       word-wrap: break-word; // Ensure text wraps on mobile
     }
     div p {
       white-space: normal; // Allow text to wrap on mobile
       word-wrap: break-word; // Ensure text wraps on mobile
     }
    }
`;


export const ShortSomeDataSection = styled.section`
margin-top: 20rem;
min-height: 20vh;
padding: 10rem 0 5rem 0;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const CTButtonSection = styled.section`
min-height: 30vh;
padding: 10rem 0 5rem 0;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const  ShortCenter = styled.section`
min-height: 10vh;
padding: 10rem 0 5rem 0;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const CustomImageCard = styled.div`
  width: 40%;
  padding: 1rem;
  margin-right: 1rem;
  background-color: rgba(0, 0, 0, 0.0);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-in-out;

&:hover{
    transform: translateY(-1rem);
}
`;

export const CustomWordingCard =styled.div`
width: 50%;
padding: 1rem;
background-color: rgba(0, 0, 0, 0.0);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 300ms ease-in-out;

&:hover{
    transform: translateY(-1rem);
}
`;


export const PaginationButtons = styled.div`
  position: relative;
  bottom: 2rem;
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  padding: 10rem 0 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 20px;
  }
`;


export const SchoolName = styled.div`
  min-height: 50vh;
  padding: 10rem 0 5rem 0;
  width: 80%;
  border-radius: 10px;
  transform: translateY(-50px); /* Move the AdvertMenu up by 50px */
  margin: 0 auto; /* Center the AdvertMenu */
  display: flex;
  justify-content: space-around;
  transition: all 300ms ease-in-out;
  &:scrolled{
    transform: translateY(0);
    opacity: 1;
  }
  &:not-scrolled{
    transform: translateY(2rem);
    opacity: 0;
  }
   @media (max-width: ${({theme})=>theme.mobile}){
    /* min-height: 50vh; */
    flex-direction: column;
    align-items: center;
    margin-top: -20rem;
  }
`;

export const DivCard = styled.div`
  flex: 0 1 45%; /* Each card takes up 30% of the available space */
  margin: 4rem;
  background-color: black;
  /* border-radius: 30px; */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  position: relative; /* Ensure the card is a positioned container */
  border-radius: 20px;
  transition: all 300ms ease-in-out;
  height: 50vh;
  width: auto;
  /* margin-top: 10rem; */
  /* left: 2rem; */
  &:hover{
    transform: translateY(-1rem);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex: 0 1 100%;
    margin: 16rem 0;
    margin-top: 5rem;
    margin-bottom: 20rem;
  }
`;

export const DivHero = styled.div`
width: auto;
height: 80vh;
@media(max-width: ${({theme})=> theme.mobile}){
  width: auto;
  height: 50vh;
  flex-direction: column;
  left: 2rem;
  margin-top:20rem;
}
`;

export const DivCardImage = styled.img`
  width: 120%;
  height: 140%;
  object-fit: cover; 
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: auto; /* Reset width to auto for mobile */
    height: auto; /* Reset height to auto for mobile */
    max-width: 100%; /* Ensure the image doesn't exceed its container width */
  }
`;


export const ButtonInsideBeforeComp = styled.button`
  margin: 0 1rem; /* Add margin between buttons */
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #04273e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;


export const StyledBeforeFooter = styled.footer`
  width: 100%;
  height: 40vh;
  background-color: #311616;
  display: flex;
  border-radius: 50% 50% 0 0 / 50% 50% 0 0;

  @media(max-width: ${({ theme }) => theme.mobile}) {
    height: 90vh;
    border-radius: 50% 50% 0 0 / 50% 50% 0 0;
  }
`;

export const SloppyContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  clip-path: path('M0,50 Q25,0 50,50 T100,50 T150,50 T200,50 L200,100 L0,100 Z');
  border: 1px solid #000;
`;


export const Content = styled.div`
  padding: 50px;
  background: green;
  height: 100%;
`;

