import styled,{keyframes} from "styled-components";

const typing  = keyframes`
75%{
    width: 0ch;
};
100%{
    width: 56ch;
}
`;


const blink = keyframes`
0%{
    border-right: 4px solid rgba(255,255,255,0);
};
100%{
    border-right: 4px solid rgba(255,255,255,1);
}
`;


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
    animation: ${typing} 5s steps(39), ${blink} 1s ease-in-out 8s infinite;
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
`;

export const CardImage = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 10px;
`;

export const CardContent = styled.div`
  margin-top: 1rem;
`;

export const CardTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  margin-bottom: 1rem;
`;

export const CardButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${({theme})=> theme.colors.orange};
  color: black;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
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
    letter-spacing: 1.2rem;
    font-size: 2rem;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    width: 39ch;
    margin: auto;
    animation: ${typing} 5s steps(39), ${blink} 1s ease-in-out 8s infinite;
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