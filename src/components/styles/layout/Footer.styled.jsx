import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  height: 60vh;
  padding: 2.5rem;
  color: #1d2022;
  text-align: center;
  font-size: 20px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #1d2022;
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
  display: flex;
  flex-direction: column;
  @media(max-width:${({ theme })=> theme.mobile}){
    align-items: flex-start;
    width: 100%;
    background-color: #1d2022;
    height: 90vh;
    border-radius: 0; /* Reset border-radius for mobile */
  }
`;

export const FooterLogo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-right: 0rem;
  font-weight: bold;
  display: inline;
  img {
    height: 10rem;
    width: auto;
    border-radius: 50%;
    margin: 1.5rem 0;
  }
  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
    img {
      height: 10rem;
      width: auto;
      border-radius: 50%;
      display: block;
      margin: 1.5rem 0;
      gap: -2px;
      
    }
  }
`;

export const FooterLogoRight = styled.div`
 position: absolute;
  top: 0;
  right: 0;
  margin-right: 0rem;
  font-weight: bold;
  display: inline;
  img {
    height: 10rem;
    width: auto;
    border-radius: 50%;
    margin: 1.5rem 0;
  }
  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
    img {
      height: 10rem;
      width: auto;
      border-radius: 50%;
      display: block;
      margin: 1.5rem 0;
      gap: -2px;
    }
  }
`;

export const ContactInfo = styled.div`
margin-right: 0rem;
font-weight: bold;
margin-bottom: -5rem;
a{
  height: 9rem;
  width: auto;
  display: block;
  margin: 1.5rem 0;
}



@media (min-width: 768px) {
  align-items: center;
  justify-content: center;
  a{
  height: 9rem;
  width: auto;
  display: block;
  margin: 1.5rem 0; 
  margin-bottom: 4rem;
  }
  div{

  }
}
`;

export const FooterNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem; /* Add margin to drop it down */
  a {
    margin-right: 1.5rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  &:last-child {
    margin: 0;
  }
  @media(max-width: ${({ theme })=> theme.mobile}){
    flex-direction: column;
    align-items: flex-start;
    padding-right: 5rem;
    a {
      margin-right: 1rem;
      margin-bottom: 0;
      margin-top: 1rem;
    }
  }
`;

export const DeveloperInfo = styled.div`
  margin-top: 0.7rem;
  font-size: 1.9rem;
  color: white;
  /* @media(max-width: $) */
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${({ theme })=> theme.mobile}) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const CopyRightInfo = styled.div`
  margin-top: 0.7rem;
  font-size: 1.9rem;
  color: white;
`;

//Footer social icons

export const FooterSocialIcons = styled.div`
display: flex;

@media(max-width: ${({ theme })=>theme.mobile}){
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        margin: 0 0.5rem;
        font-size: 2rem;
        
    }
}

`;

export const FooterNavLink = styled.a`
text-transform: uppercase;
color: ${({theme})=> theme.colors.white};
letter-spacing: 1.5px;

&::after{
    content:"";
    display: block;
    height: 3px;
    width: 0%;
    background: ${({theme})=> theme.colors.orange};
    transition: all ease-in-out 300ms;
}

&:hover{
    &::after{
        width: 100%;
    }
}
`;

export const DeveloperInfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 40%;
  transform: translateX(-50%);
  margin-bottom: 0.7rem;
  font-size: 1.9rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export const FooterNavContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0.7rem; /* Adjust as needed */
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const FooterCard = styled.div`
  position: absolute;
  top: 14rem; /* Adjust this value based on your design */
  left: 8rem; /* Adjust this value based on your design */
  width: 30rem; /* Set the width of the card */
  height: 30rem; /* Set the height of the card */
  background-color: black; /* Set the background color of the card */
  border-radius: 10px; /* Add some border radius to the card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add some shadow for a floating effect */
  padding: 1rem; /* Add some padding inside the card */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: white;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;


export const RightFooterCard = styled.div`
  position: absolute;
  top: 14rem; /* Adjust this value based on your design */
  right: 8rem; /* Adjust this value based on your design */
  width: 30rem; /* Set the width of the card */
  height: 30rem; /* Set the height of the card */
  background-color: black; /* Set the background color of the card */
  border-radius: 10px; /* Add some border radius to the card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add some shadow for a floating effect */
  padding: 1rem; /* Add some padding inside the card */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: white;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 50%; /* Adjust the width for mobile view */
    right: 50%;
    transform: translateX(240%);
    position: absolute;
    top: 12rem; /* Adjust this value based on your design */
    left: 10rem; /* Adjust this value based on your design */
    width: 15rem; /* Set the width of the card */
    height: 20rem; /* Set the height of the card */
    background-color: black; /* Set the background color of the card */
    border-radius: 10px; /* Add some border radius to the card */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add some shadow for a floating effect */
    padding: 1rem; /* Add some padding inside the card */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
`;