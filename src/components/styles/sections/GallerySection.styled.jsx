import styled from "styled-components";


export const StyledGallerySection = styled.section`
    min-height:90vh;
    padding: 10rem 0 5rem 0;
    width: 100%;
`;


export const GalleryItems = styled.div`
display: flex;
flex-wrap: wrap;

@media(max-width: ${({theme})=>theme.mobile}){
    flex-direction: column;
}
`;

export const ClipHexagon = styled.div`
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

export const SingleGallery  = styled.div`
    min-height: 20rem;
    border-radius: 7px;
    /* background:rgba(4,20,44,1); */
    display: flex;
    flex-direction: column;
    justify-content: start;
    flex: 1;
    padding: 1.2rem;
    margin-right: 3rem;
    transition: all 300ms ease-in-out;

    &:hover{
        transform: translateY(-1rem);
    }
    &:last-child{
        margin-right: 0;
    }
    h1{
        font-size: 2rem;
        margin: 1.5rem 0;
        background: linear-gradient(
            to right,
            ${({theme})=>theme.colors.orange} 0%,
            ${({theme})=> theme.colors.purple} 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    p{
        font-family: "Poppins",sans-serif;
        font-size: 1.7rem;
        margin-top: 2rem;
    }
    @media(max-width: ${({theme})=> theme.mobile}){
        margin: 0 0 4rem 0;
        width: 100%;
        p{
          font-size: 1.2rem;
          margin-top: 1rem;
        }
    }
`;

export const IconGalleryWrapper  = styled.div`
display: flex;
flex-shrink: 0;
font-size: 28px;
align-items: center;
justify-content: center;
height: 4.5rem;
width: 4.5rem;
color: ${({theme})=>theme.colors.navyBlue};
background: ${({theme})=>theme.colors.white};
border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
`;

export const GalleryImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
position: relative;
perspective: 1000px;
img{
    width: 100%;
    border-radius: 30px;
    z-index: 3;
 }
 @media(max-width: ${({theme})=> theme.mobile}){
    margin-top: 3rem;
    justify-content: flex-start;

    img{
        width: 100%;
        border-radius: 9px;
    }
 }
`;

export const LayeredCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 7px;
  padding: 1.2rem;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: translateY(-1rem);
  }

  &:last-child {
    margin-right: 0;
  }

  h1 {
    font-size: 2rem;
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

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.9rem;
  }
`;