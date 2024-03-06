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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
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


export const SomeDataSection = styled.section`
min-height: 90vh;
padding: 10rem 0 5rem 0;
width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 90%;
  padding: 1rem;
  margin-right: 2rem;
  background-color: rgba(0, 0, 0, 0.0);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-in-out;

&:hover{
    transform: translateY(-1rem);
}
`;

export const CardImage = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 10px;
`;

export const CardContent = styled.div`
  margin-top: 1rem;
`;

export const CardTitle = styled.h1`
  font-size: 2.5rem;
  font-weight:200;
  margin-bottom: 0.5rem;
  font-family: "Poppins",sans-serif;
  font-weight: bold;
`;

export const CardText = styled.p`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-family: "Poppins",sans-serif;
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

export const HeroContent = styled.div `
width: 100%;
max-width:58rem;
color: ${({theme})=>theme.colors.white};
text-transform: uppercase;
h1{
    letter-spacing: 1.5rem;
    font-size: 3rem;
    font-weight: 900;
    overflow: hidden;
    white-space: nowrap;
    width: 54ch;
    margin: auto;
    /* border-right: 4px solid rgba(255,255,255,1); */
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


export const ShortSomeDataSection = styled.section`
margin-top: 10rem;
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