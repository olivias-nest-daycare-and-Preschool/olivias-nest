import styled from "styled-components";


export const StyledHomeBackground = styled.footer`
  position: relative;
  width: 100%;
  height: 80vh;
  position: relative;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./images/wall2.jpg');
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(20px); /* Adjust the blur radius as needed */
  -webkit-backdrop-filter: blur(20px); /* For Safari */
  @media(max-width:${({ theme })=> theme.mobile}){ 
    height: 87vh;
  }
`;

export const InfoCard = styled.div`
  top: 14rem; /* Adjust this value based on your design */
  left: 0.8rem; /* Adjust this value based on your design */
  width: 43rem; /* Set the width of the card */
  height: 45rem; /* Set the height of the card */
  background-color: black; /* Set the background color of the card */
  border-radius: 40px; /* Add some border radius to the card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add some shadow for a floating effect */
  padding: 1rem; /* Add some padding inside the card */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: white;
  margin-right: 2rem;
  position: relative; /* Position relative to allow absolute positioning of the image */
  overflow: hidden; /* Hide any overflow to ensure the image stays within the container */
  margin-top: -15rem;
  transition: all 300ms ease-in-out;
  &:hover{
    transform: translateY(-1rem);
  }
   @media (max-width: ${({theme})=>theme.mobile}){
    width: 80%; /* Adjust width for mobile */
    height: 80%; /* Adjust height for mobile */
    margin-top: 2rem; /* Adjust margin for mobile */
    margin-right: 1; /* Remove right margin for mobile */
  }
`;


export const InfoCardContainer = styled.div`
display: flex;
margin-top: -35rem;
 /* @media (max-width: ${({theme})=>theme.mobile}){
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  } */
`;

export const Heading = styled.h1`
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 2rem;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 75%; /* Cover the lower 3/4 of the container */
  overflow: hidden;
  border-radius: 0 0 40px 40px; /* Add border-radius to the bottom part of the image wrapper */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire wrapper */
  border-radius: 20px;
`;