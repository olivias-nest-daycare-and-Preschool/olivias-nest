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
color: ${({ theme }) => theme.colors.white};
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
        ${({ theme }) => theme.colors.orange} 0%,
        ${({ theme }) => theme.colors.purple} 100%
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
@media (max-width: ${({ theme }) => theme.mobile}){
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
  align-items: end;
  justify-content: left;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Bait2Section = styled.div`
min-height: 40vh;
padding: 10rem 0 5rem 0;
width: 90%;
display: flex;
align-items: start;
justify-content: left;
padding-left: 5rem;
@media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-right:'1rem';
  padding-left:'1rem';
  margin-bottom: 2rem; /* Reduce vertical space between items */
  margin-top: 20rem;
  transition: all 300ms ease-in-out;
  &:hover{
    transform: translateY(-1rem);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: -5rem;
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
  font-family: "Poetsen One",sans-serif;
`;

export const FeatureDescription = styled.p`
  margin-top: 0.5rem; /* Adjust spacing between title and description */
  font-size: 1.5rem;
  /* color: rgba(255,255,255,0.7); */
`;

export const BlockQuote = styled.blockquote`
 font-style: italic;
  margin: 20px;
  padding: 10px 20px;
  border-left: 5px solid #ccc;
  /* color: white; */
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
    color: black;
  }

  &::after {
    content: close-quote;
    font-size: 4rem;
    line-height: 0;
    position: absolute;
    right: 10px;
    bottom: -10px;
    color: black;
  }
`;

export const Cite = styled.cite`
 display: block;
  text-align: right;
  margin-top: 10px;
  font-style: normal;
  /* color: #777; */
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
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.0);
  transition: all 300ms ease-in-out;
  margin-bottom: 1rem;
  &:hover{
    transform: translateY(-1rem);
  }
 @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
    margin-bottom: 1rem;
    height: 500px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  @media(max-width: ${({ theme }) => theme.mobile}){
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  }
`;

export const CardContent = styled.div`
  margin-top: 1rem;
  margin-top: 2rem; /* Increase space between cards */
  margin-left: 1rem; /* Pull left margin */
  margin-right: 1rem; /* Pull right margin */
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
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
  font-size: 1.5rem;
  font-family: "Poppins",sans-serif;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.2rem;
    text-align: left;
    width: 100%;
    word-wrap: break-word;
  }
`;

export const CardButton = styled.a`
  display: inline-block;
  margin-right: 18px;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.orange};
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

export const HeroContent = styled.div`
width: 100%;
max-width:58rem;
margin-top: 8rem;
color: ${({ theme }) => theme.colors.white};
text-transform: uppercase;
/* transition: all 300ms ease-in-out;
  &:hover{
    transform: translateY(-1rem);
  } */

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
        ${({ theme }) => theme.colors.orange} 0%,
        ${({ theme }) => theme.colors.purple} 100%
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
/* @media (max-width: ${({ theme }) => theme.mobile}){
    h1{
        letter-spacing: 0.8rem;
        font-size: 1.5rem;
        width: 45ch;
    }
    h3{
        font-size: 2.1rem;
         margin: .5rem 0;
    }
    p{
        font-size: 1.2rem;
        margin: 1rem 0;
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
        margin: 1rem 0;
     }
     p {
       font-size: 1.2rem;
       white-space: normal; // Allow text to wrap on mobile
       word-wrap: break-word; // Ensure text wraps on mobile
       margin: 1rem 0;
     }
     div p {
       white-space: normal; // Allow text to wrap on mobile
       word-wrap: break-word; // Ensure text wraps on mobile
       margin: 1rem 0;
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
export const ShortCenter = styled.section`
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

export const CustomWordingCard = styled.div`
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
  padding: 1rem;
  background:blue;
  width: 100%;
  border-radius: 10px;
  transform: translateY(-50px); /* Move the AdvertMenu up by 50px */
  margin: 0 auto; /* Center the AdvertMenu */
  display: flex;
  flex-direction: column;
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
   @media (max-width: ${({ theme }) => theme.mobile}){
    /* min-height: 50vh; */
    flex-direction: column;
    align-items: center;
    margin-top: 0rem;
  }
`;

export const DivCard = styled.div`
  margin: 0 auto;
  background-color: black;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  height: 50vh;
  width: width: 90%;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 1rem;
    width: 300px;
     margin: 0 ;
  }
`;

export const DivHero = styled.div`
background: pink;
@media(max-width: ${({ theme }) => theme.mobile}){
  width: auto;
  flex-direction: column;
}
`;

export const DivCardImage = styled.img`
margin: 0;
  width:80vw;
  height: 100%;
  object-fit: cover; 
  -webkit-box-shadow: 10px 13px 57px 60px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 13px 57px 60px rgba(0,0,0,0.75);
box-shadow: 10px 13px 57px 60px rgba(0,0,0,0.75);
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: auto; /* Reset width to auto for mobile */
    height: auto; /* Reset height to auto for mobile */
    max-width: 100%; /* Ensure the image doesn't exceed its container width */
   -webkit-box-shadow: 10px 13px 57px 60px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 13px 57px 60px rgba(0,0,0,0.75);
box-shadow: 10px 13px 57px 60px rgba(0,0,0,0.75);
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


export const CTASection = styled.div`
min-height: 60vh;
padding: 10rem 0 5rem 0;
width: 90%;
display: flex;
align-items: start;
justify-content: left;
/* padding-left: 50rem; */
@media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5rem;
  }
`;

export const DivideSemiSection = styled.div`
width: 50%;
`;



export const InfoButton = styled.a`
/* background: ${({primary,theme})=> primary ? theme.colors.orange:
"none"}; */
background: ${({theme})=>theme.colors.orange};
color: ${({primary,theme})=>theme.colors.black};
padding: 10px 20px;
margin: ${({margin})=>margin};
border: 2px solid ${({ theme })=> theme.colors.orange}; 
/* border-radius: 5px; */
font-size: 18px;
font-family: "Roboto Slab",monospace;
font-weight: 700;
border-radius: 20px;
cursor: pointer;
display:inline-flex;
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
  white-space: nowrap;
  }

`;



//informative


export const StyledFacilitiesSection = styled.section`
min-height: auto;
padding: 10rem 0 5rem 0;
width: 100%;
`;




export const SingleFacility = styled.div`
display: flex;
align-items: center;
&:nth-child(even){
    flex-direction: row-reverse;
    margin: 10rem 0;
}
@media(max-width: ${({theme})=> theme.mobile}){
    flex-direction: column;
    &:nth-child(even){
        flex-direction: column;
        img{
            transform: rotateY(0deg);
            width: 180%;
            height: 180%;
        }
        div{
            
        }
    }
    &:nth-child(odd){
      img{
        width: 180%;
        height: 180%;
      }
    }
}
`;

export const FacilityImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
position: relative;
perspective: 1000px;
margin-right: 10rem;
img{
    /* width: 65%; */
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* width: 85%; */
    border-radius: 20px;
    /* transform: rotateY(20deg);
    transition: ${({theme})=>theme.transition}; */
    z-index: 3;
 }
 &:hover{
    img{
        transform: rotateY(0deg);
    }
    div{
        transform: skew(-3deg,3deg) rotateY(0deg);
    }
 }
 @media(max-width: ${({theme})=> theme.mobile}){
    margin-top: -10rem;
    justify-content: flex-start;
    width: 100%;
    height: 80%;
    margin-right: 2rem;
    img{
        transform: rotateY(0deg);
        border-radius: 9px;
    }
 }
`;

export const SlantCard = styled.div`
position: absolute;
/* width: 65%; */
width: 100%;
height: 100%;
object-fit: cover;
background: linear-gradient(
    to right,
    ${({theme})=>theme.colors.orange} 0%,
    ${({theme})=> theme.colors.purple} 100%
);
border-radius: 20px;
/* transition: ${({theme})=>theme.transition};
transform: skew(3deg, -3deg) rotateY(20deg); */
z-index: 2;

@media(max-width: ${({theme})=> theme.mobile}){
    transform: skew(3deg,-3deg) rotateY(0deg);
    /* margin-right: 2rem; */
    width: 100%;
    border-radius: 9px;
 }
`; 


export const FacilityDescription = styled.div`
flex:1;
h1{
    font-size: 3rem;
    margin: 0 0 2rem 0;
    background: linear-gradient(
        to right,
        ${({theme})=> theme.colors.orange} 0%,
        ${({theme})=> theme.colors.purple} 100%
    );
    background-clip:text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
p{
    font-family: "Poppins",sans-serif;
    font-size: 1.5rem;
    text-align: justify;
    margin-bottom: -2rem;
}
div{
    display:flex;
    align-items: center;
}
@media(max-width: ${({theme})=> theme.mobile}){
  h1{
    font-size: 2rem;
  }
  p{
    font-size: 1.4rem;
  }
}
`;

export const Tags = styled.div`
display: flex;
align-items: center; 
flex-wrap: nowrap;
margin-bottom:0.5rem;

span{
    margin-bottom: 0.5rem;
    background: #0e213c;
    display: inline-block;
    padding:7px;
    border-radius: 5px;
    font-size: 15px;
    margin-right: 1rem;
}
@media (max-width: 1200px) { /* Large desktops and laptops */
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
    gap: 5px;

  }

  @media (max-width: 992px) { /* Medium-sized devices (desktops, tablets) */
    justify-content: center;
    flex-direction: row;
  }

  @media (max-width: 768px) { /* Small devices (tablets, large phones) */
    justify-content: center;
    flex-direction: row;
    
    span {
      margin-right: 0.5rem;
      display: none;
    }
  }

  @media (max-width: 576px) { /* Extra small devices (phones) */
    flex-direction: row;
    align-items: flex-start;

    span {
      display: none;
    }
  }
`;