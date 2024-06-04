import styled from "styled-components";

export const HomeContainer = styled.div`
max-width: 1500px;
margin: 0 auto;
padding: 0 20px;
`;

export const SchoolContainer = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 25rem;
  //change
  display: flex;
  flex-direction: column; /* Ensure column layout for mobile */
  align-items: center; /* Center align items */
   @media (max-width: ${({theme})=>theme.mobile}){
    margin-top: 45rem !important;
  }
`;


export const GalleryItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        align-items: center;
    }
`;

// Single Gallery Item
export const SingleGallery = styled.div`
      width: calc(25% - 30px); // Ensure four cards per row with a gap of 30px
    background-color: #0f0e0e;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    margin: 28px; // Additional margin for spacing
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 25px;

    &:hover {
        transform: translateY(-5px);
    }

    @media(max-width: ${({theme})=> theme.mobile}){
        margin: 0 0 4rem 0;
        width: 80%;
    }
`;

// Staff Details
export const StaffDetails = styled.div`
     padding: 10px;
    text-align: center;
    flex-grow: 1; // Allow the content to grow and fill the available space

    h3 {
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 2rem;
    }

    p {
        margin-top: 5px;
        color: white;
        margin-bottom: 20px; // Adjusted for better spacing
        font-size: 1.8rem;
    }

    img {
        width: 100%; /* Set the width of the image to fill the container */
        height: 75%; /* Set the height of the image to take 3/4 of the container height */
        object-fit: cover; /* Ensure the image covers the entire space */
        border-radius: 5%; /* Make the image round */
        margin: auto; /* Push the image to the bottom */
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        img {
            width: 90%; /* Adjust width for mobile devices */
            height: auto; /* Maintain aspect ratio */
        }
        p {
            font-size: 1.6rem; /* Adjust font size for mobile devices */
        }
    }
`;

export const CustomContainer = styled.section`
  min-height: 40vh;
  width: 100%;
  position: relative;
  background-color: #ffd8b8; /* fade orange background color */
  border: 10px solid transparent;
  border-image: url('path_to_your_rope_image') 30 round; /* adjust the path and slicing as needed */
`;

export const CoverBackground = styled.div`
  background-color: #52b788; /* Adjust to match the exact green */
  padding: 20px;
  position: relative;
  color: white;
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 15px; /* Adjust height for the border effect */
    background: linear-gradient(to right, transparent 50%, #52b788 50%);
    background-size: 30px 100%;
    transform: rotate(-3deg); /* Adjust angle for the sloppy effect */
  }
`;