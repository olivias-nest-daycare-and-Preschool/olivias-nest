import styled from "styled-components";


export const StyledFacilitiesSection = styled.section`
min-height: 90vh;
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
    width: 65%;
    border-radius: 20px;
    transform: rotateY(30deg);
    transition: ${({theme})=>theme.transition};
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
    margin-top: 3rem;
    justify-content: flex-start;

    img{
        transform: rotateY(0deg);
        width: 80%;
        border-radius: 9px;
    }
 }
`;

export const SlantCard = styled.div`
position: absolute;
width: 65%;
height: 100%;
background: linear-gradient(
    to right,
    ${({theme})=>theme.colors.orange} 0%,
    ${({theme})=> theme.colors.purple} 100%
);
border-radius: 20px;
transition: ${({theme})=>theme.transition};
transform: skew(3deg, -3deg) rotateY(30deg);
z-index: 2;

@media(max-width: ${({theme})=> theme.mobile}){
    transform: skew(3deg,-3deg) rotateY(0deg);
    width: 80%;
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
flex-wrap: wrap;
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
`;

// IndoorFacilitySection.js
 export const IndoorFacilitySection = () => {
    return (
      <section id="indoor-facility">
        {/* Indoor facility content */}
      </section>
    );
  };
  
  // OutdoorFacilitySection.js
  export const OutdoorFacilitySection = () => {
    return (
      <section id="outdoor-facility">
        {/* Outdoor facility content */}
      </section>
    );
  };


  export const FacilityCard =  styled.div`
  width: 350px;
  margin: 10px 10px;
  box-shadow: 14px -12px 26px 5px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  box-shadow: 0px -1px 15px -5px #a8a4a4;
  background: linear-gradient(to right, aliceblue 50%, ${({ theme })=> theme.colors.lightNavyBlue} 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  border-radius: 20px;
  transition: all 0.5s ease-out;
  height: 40vh;
  &:hover{
    color: darkblue;
    border: 2px solid blue;
    background-position: left bottom;
    cursor: pointer;
  }
  `;

  export const FacilityCardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;
  margin-top: 4rem;
  `;

  export const FacilityCardTitle = styled.h1`
  color: linear-gradient(to right, green, yellow, orange);
  `;
  export const FacilityCardDescription = styled.div`
  color: gray;
  font-size: 15px;
  text-align: center;
  margin-top: 5rem;
  `;


export const FacilityContainer = styled.div`
/* display: flex;
justify-content: center;
flex-wrap: wrap; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* max-width: 1500px; */
  margin: 0 auto; /* Center the container within its parent */
`;



  