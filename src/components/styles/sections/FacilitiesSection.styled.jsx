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
        }
        div{
            
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
img{
    width: 90%;
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
width: 90%;
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
    font-size: 1.9rem;
    text-align: justify;
}
div{
    display:flex;
    align-items: center;
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